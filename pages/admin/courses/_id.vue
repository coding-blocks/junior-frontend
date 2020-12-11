<template>
  <nuxt-child />  
</template>
<script lang="ts">
import Vue from 'vue'
import CourseRepository from '@/repositories/courses';
import { cachableAsyncData } from '~/utils/store';

export default Vue.extend({
  data() {
    return {
      course: null,
    }
  },
  asyncData: cachableAsyncData(async ({ params }) => {
    const course = await CourseRepository.fetchById(Number(params.id))

    return {
      course,
    }
  }),
})
</script>
