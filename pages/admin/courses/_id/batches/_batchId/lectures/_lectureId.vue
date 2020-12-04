<template>
  <div>
    <LectureEditor 
      :lecture="lecture"
    />
  </div>
</template>
 
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex';
import LectureEditor from '@/components/Lectures/LectureEditor';
import LectureRepository from '@/repositories/admin/lectures';

export default Vue.extend({
  name: 'LectureEditPage',
  layout: 'admin',
  components: {
    LectureEditor
  },
  data() {
    return {
      lecture: null
    }
  },
  async asyncData({ params }) {
    const lecture = await LectureRepository.fetchById(params.lectureId)

    return {
      lecture
    }
  }
})
</script>