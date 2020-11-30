<template>
  <div class="row c-card-carousel mt-40 pb-xl-100 pb-lg-75 pb-md-50 pb-30">
    <div class="col-lg-3 col-md-4 col-sm-6 col-8">
      <CourseLectureCard 
        v-for="lecture in lectures"
        :key="lecture.id"
        :lecture="lecture"
      />
    </div>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue'
import CourseLectureCard from '@/components/Lectures/CourseLectureCard.vue';

export default Vue.extend({
  props: {
    lectures: {
      type: Object,
      required: true
    }
  },
  components: {
    CourseLectureCard
  }
})
</script>
