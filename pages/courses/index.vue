<template>
  <div>
    <div class="py-50 px-xl-100 px-lg-75 px-md-50 px-sm-30 px-20">
      <div class="container">
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="flex-1 pr-md-25 t-align-md-l t-align-c">
            <div class="heading-5 bold mb-15">
              Let us help to find you the perfect course!
            </div>
            <div class="heading-6 text-grey-light-1">
              Which class are you/your kid in?
            </div>
          </div>
          <div class="col-md-6 mt-md-none mt-25">
            <div class="row no-gutters justify-content-between align-items-center">
              <div 
                class="pill-tag pill-tag--hoverable heading-6 bold"
                :class="selectedClassTag === '1-3' && 'active'"
                @click="setSelectedClassTag('1-3')"
              >
                1-3
              </div>
              <div 
                class="pill-tag pill-tag--hoverable heading-6 bold"
                :class="selectedClassTag === '4-6' && 'active'"
                @click="setSelectedClassTag('4-6')"
              >
                4-6
              </div>
              <div 
                class="pill-tag pill-tag--hoverable heading-6 bold"
                :class="selectedClassTag === '7-9' && 'active'"
                @click="setSelectedClassTag('7-9')"
              >
                7-9
              </div>
              <div 
                class="pill-tag pill-tag--hoverable heading-6 bold"
                :class="selectedClassTag === '10-12' && 'active'"
                @click="setSelectedClassTag('10-12')"
              >
                10-12
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <VAsync :task="fetchRecommendedCourseTask">
      <template v-slot="{ value: course }">
        <CourseRecommendedCard 
          v-if="course"
          :course="course"
        />
      </template>
    </VAsync>

    <div class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20">
      <div class="container">
        <div class="heading-4 bold mb-40 t-align-c">Other Popular Courses</div>
        <div class="row">
          <div 
            class="col-md-6 mb-md-none mb-40"
            v-for="course in courses"
            :key="course.id"
          >
            <CourseCard 
              :course="course"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VAsync from '@/components/Base/VAsync.vue';
import CourseCard from '@/components/Course/CourseCard.vue';
import CourseRecommendedCard from '@/components/Course/CourseRecommendedCard.vue';
import CourseRepository from '@/repositories/courses';

export default Vue.extend({
  components: {
    CourseCard,
    VAsync,
    CourseRecommendedCard,
  },
  data() {
    return {
      courses: [],
      selectedClassTag: '1-3'
    }
  },
  async asyncData() {
    const courses = await CourseRepository.fetchAll();
    
    return {
      courses
    }
  },
  tasks(t) {
    return {
      fetchRecommendedCourseTask: t(async function() {
        const courses = await CourseRepository.fetchAll({
          filter: {
            isRecommended: true,
            classTag: this.selectedClassTag
          }
        })

        return courses[0];
      })
    }
  },
  methods: {
    setSelectedClassTag(tag) {
      this.selectedClassTag = tag;
      this.fetchRecommendedCourseTask.run();
    }
  }
})
</script>
