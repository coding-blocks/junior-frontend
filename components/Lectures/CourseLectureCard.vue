<template>
  <!-- for fade add "course-video-card--unwatched" class -->
  <div 
    class="card course-video-card p-0"
    :class="willHappen && 'course-video-card--unwatched'"
  >
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/varun-bhaiya-python.svg"
    />
    <div class="lecture-tag">Lecture 1 </div>
    <button 
      class="button-primary floating-button"
      v-if="!willHappen"
    >
      Start Learning
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
  props: {
    lecture: {
      type: Object,
      required: true
    }
  },
  computed: {
    willHappen() {
      return moment(this.lecture.start_time).isAfter();
    }
  }
})
</script>
