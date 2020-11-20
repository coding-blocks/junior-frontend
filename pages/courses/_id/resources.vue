<template>
  <div>
    {{resources}}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CourseRepository from '@/repositories/courses';

export default Vue.extend({
  data() {
    return {
      resources: []
    }
  },
  async asyncData({ params }) {
    const resources = await CourseRepository.fetchResources(Number(params.id));

    return {
      resources
    }
  }
})
</script>
