<template>
  <nuxt-child />  
</template>
<script lang="ts">
import Vue from 'vue';
import CourseRepository from '~/repositories/courses';
import { cachableAsyncData } from '~/utils/store';
import { hash } from 'rsvp';

export default Vue.extend({
  data() {
    return {
      course: null,
      currentBatchAttempt: null,
    }
  },
  asyncData: cachableAsyncData(async ({ params, store }) => {
    const user = store.state.session.user;
    const course = CourseRepository.fetchById(Number(params.id));
    const currentBatchAttempt = await (user ? CourseRepository.fetchCurrentBatchAttempt(Number(params.id)) : null);

    return hash({
      course,
      currentBatchAttempt
    })
  })
})
</script>
