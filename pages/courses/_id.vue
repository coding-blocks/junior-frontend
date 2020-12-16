<template>
  <div>
    <BreadCrumbs class="my-5" />
    <nuxt-child />  
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import BreadCrumbs from '@/components/Base/BreadCrumbs.vue';
import CourseRepository from '~/repositories/courses';
import { cachableAsyncData } from '~/utils/store';
import { hash } from 'rsvp';

export default Vue.extend({
  components: {
    BreadCrumbs
  },
  data() {
    return {
      course: null,
      currentBatchAttempt: null,
    }
  },
  asyncData: cachableAsyncData('courses-id', async ({ params, store }) => {
    const user = store.state.session.user;
    const course = await CourseRepository.fetchById(params.id);
    const currentBatchAttempt = await (user ? CourseRepository.fetchCurrentBatchAttempt(course.id) : null);

    store.commit('current-batch-attempt/setCurrentBatchAttempt', { batchAttempt: currentBatchAttempt })

    return hash({
      course,
      currentBatchAttempt
    })
  })
})
</script>
