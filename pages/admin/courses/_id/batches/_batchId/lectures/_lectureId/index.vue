<template>
  <div>
    <nuxt-link
      class="button-solid button-orange my-3 px-5"
      :to="`${this.$route.params.lectureId}/resources`"
    >
      Resources
    </nuxt-link>
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
  },
  methods: {
    onAfterSave() {
      const {
        id: courseId,
        batchId
      } = this.$router.params
      this.$router.push({
        path: `/admin/courses/${courseId}/batches/${batchId}/lectures`,
      })
    }
  }
})
</script>