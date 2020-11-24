<template>
  <!-- for fade add "course-video-card--unwatched" class -->
  <div 
    class="card course-video-card p-0"
  >
    <img
      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/varun-bhaiya-python.svg"
    />
    <div class="lecture-tag">Lecture 1</div>
    <button class="button-primary floating-button">Start Learning</button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    lecture: {
      type: Object,
      required: true
    }
  }  
})
</script>
