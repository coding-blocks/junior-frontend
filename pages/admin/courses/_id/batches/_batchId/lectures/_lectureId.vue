<template>
  <nuxt-child />  
</template>
<script lang="ts">
import Vue from 'vue';
import LectureRepository from '@/repositories/admin/lectures';
import { cachableAsyncData } from '@/utils/store';

export default Vue.extend({
  data() {
    return {
      lecture: null
    }
  },
  asyncData: cachableAsyncData('admin-lectures-lectureId', async ({ params }) => {
    const lecture = await LectureRepository.fetchById(Number(params.lectureId));

    return {
      lecture
    }
  }),  
})
</script>
