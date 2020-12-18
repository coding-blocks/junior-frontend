<template>
  <div 
    class="card white mb-50"
    :class="course.backgroundTheme"
  >
    <div class="row no-gutters align-items-center mb-40">
      <img 
        :src="course.logo" 
        style="width: 55px;"
      >
      <div class="flex-1 pl-25">
        <div class="font-4">RECOMMENDED FOR {{course.classTag}}</div>
        <div class="heading-4 bold mt-10">{{course.title}}</div>
      </div>
    </div>
    <div class="row no-gutters align-items-center justify-content-between">
      <div class="col-md-8">
        <div class="align-items-center">
          <VAsync :task="fetchProgressTask">
            <template v-slot="{ value }">
              <div class="row no-gutters align-items-center">
                <div v-if="value.percentage === 100">
                  <fa :icon="faCheck" class="fa-2x orange" />
                </div>
                <RadialProgress 
                  v-else
                  :progress="value.percentage"
                />
                <div class="flex-1 pl-sm-20 pl-10">
                  <div>Lectures</div>
                  <div class="bold mt-10">{{value.completedLectures}}/{{value.totalLectures}} lectures covered</div>
                </div>
              </div>
            </template>
          </VAsync>
        </div>
      </div>
      <nuxt-link 
        class="button-primary mt-md-none mt-30"
        :to="`/courses/${course.slug}`"
      >
        Go to classroom
      </nuxt-link>
    </div>
  </div>  
</template>
<script>
import Vue from 'vue';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import CourseRepository from '@/repositories/courses';
import BatchRepository from '@/repositories/batches';
import VAsync from '@/components/Base/VAsync.vue';
import RadialProgress from '@/components/Base/RadialProgress.vue';
import moment from 'moment';

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    faCheck() {
      return faCheck
    }
  },
  tasks(t) {
    return {
      fetchProgressTask: t(async function () {
        const batchAttempt = await CourseRepository.fetchCurrentBatchAttempt(this.course.id);
        const batch = batchAttempt.batch;
        const lectures = await BatchRepository.fetchLectures(batch.id);

        const completedLectures = lectures.filter(lecture => moment(lecture.start_time).isBefore(moment())).length;
        const totalLectures = lectures.length;

        return {
          completedLectures,
          totalLectures,
          percentage: (completedLectures/totalLectures)*100
        }
      })
    }
  }
})
</script>
