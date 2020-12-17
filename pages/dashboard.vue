<template>
  <div>
    <BreadCrumbs class="my-5" />
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="heading-5 bold mb-40">My enrolled courses</div>
          <EnrolledCourseCard 
            v-for="course in enrolledCourses"
            :key="course.id"
            :course="course"
          />
        </div>
        <div class="col-lg-4">
          <div class="card bg-grey-light-3 mb-50">
            <div class="row no-gutters align-items-center">
              <div class="round s-70x70">
                <img :src="user.photo">
              </div>
              <div class="flex-1 pl-20">
                <div class="heading-5 bold">Hi, {{user.name}}</div>
                <div class="mt-10 font-5">You have {{upcomingLectures.length}} lectures to attend this week</div>
              </div>
            </div>
          </div>
          <div class="card mb-50" style="background: rgba(37, 142, 232,0.1);">
            <div class="heading-5 bold mb-30">Upcoming Lectures</div>
            <UpcomingLectureCard 
              v-for="lecture in upcomingLectures"
              :key="lecture.id"
              :lecture="lecture"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex';
import BreadCrumbs from '@/components/Base/BreadCrumbs.vue';
import UpcomingLectureCard from '@/components/Lectures/UpcomingLectureCard.vue';
import EnrolledCourseCard from '@/components/Course/EnrolledCourseCard.vue';
import LectureRepository from '@/repositories/lectures';
import CourseRepository from '@/repositories/courses';
import { hash } from 'rsvp';

export default Vue.extend({
  computed: {
    ...mapState('session', ['user'])
  },
  components: {
    UpcomingLectureCard,
    EnrolledCourseCard,
    BreadCrumbs
  },
  data() {
    return {
      upcomingLectures: []
    }
  },
  async asyncData() {
    const upcomingLectures = LectureRepository.fetchUpcomingLectures();
    const enrolledCourses = CourseRepository.fetchEnrolledCourses();

    return hash({
      upcomingLectures,
      enrolledCourses
    })
  }
})
</script>
