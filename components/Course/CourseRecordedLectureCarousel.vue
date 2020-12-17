<template>
  <div class="row c-card-carousel mt-40 pb-xl-100 pb-lg-75 pb-md-50 pb-30">
    <div 
      class="col-lg-3 col-md-4 col-sm-6 col-8"
      v-for="(lecture,index) in lectures"
      :key="lecture.id"
    >
      <nuxt-link 
        :event="hasStarted(lecture) ? 'click' : ''"
        :to="`/courses/${course.slug}/lectures/${lecture.id}`"
      >
        <CourseLectureCard 
          :lecture="lecture"
          :index = index+1
        />
      </nuxt-link>
    </div>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue';
import CourseLectureCard from '@/components/Lectures/CourseLectureCard.vue';
import moment from 'moment';

export default Vue.extend({
  props: {
    lectures: {
      type: Array,
      required: true
    },
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    CourseLectureCard
  },
  methods: {
    hasStarted(lecture) {
      return moment(lecture.start_time).isBefore(moment());
    }
  }
})
</script>
