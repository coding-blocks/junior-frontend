<template>
  <nuxt-child />  
</template>
<script lang="ts">
import Vue from 'vue'
import CourseRepository from '@/repositories/courses';
import { cachableAsyncData } from '~/utils/store';
import { mapState } from 'vuex';

export default Vue.extend({
  data() {
    return {
      course: null,
    }
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
  },
  asyncData: cachableAsyncData('admin-courses-id', async ({ params }) => {
    const course = await CourseRepository.fetchById(Number(params.id))

    return {
      course,
    }
  }),
})
</script>
