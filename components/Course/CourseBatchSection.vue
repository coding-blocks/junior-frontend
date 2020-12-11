<template>
  <VAsync :task="fetchBatchesTask">
    <template v-slot="{ value: batches }">
      <div v-if="batches.length">
        <div
          class="pt-xl-100 pt-lg-75 pt-md-50 pt-30 px-xl-100 px-lg-75 px-md-50 px-sm-30 px-20"
        >
          <div class="container">
            <div class="heading-5 bold t-align-c">
              Choose from available batches
            </div>
          </div>
        </div>
        <div class="row c-card-carousel mt-40 pb-xl-100 pb-lg-75 pb-md-50 pb-30">
          <div 
            class="col-xl-3 col-md-5 col-sm-7 col-10"
            v-for="batch in batches"
            :key="batch.id"
          >
            <CourseBatchCardSmall 
              :batch="batch"
            />
          </div>
        </div>  
      </div>    
    </template>
  </VAsync>
</template>
<script>
import Vue from 'vue'
import CourseBatchCardSmall from '@/components/Course/CourseBatchCardSmall.vue';
import CourseRepository from '@/repositories/courses';
import VAsync from '@/components/Base/VAsync';

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    CourseBatchCardSmall,
    VAsync
  },
  tasks(t) {
    return {
      fetchBatchesTask: t(function *() {
        return CourseRepository.fetchBatches(this.course.id);
      })
    }
  }
})
</script>
