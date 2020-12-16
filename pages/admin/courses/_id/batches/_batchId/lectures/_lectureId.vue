<template>
  <div>
    <LectureEditor 
      :lecture="lecture"
    />
  </div>
</template>
 
<script>
import Vue from 'vue'
import { mapState } from 'vuex';
import LectureEditor from '@/components/Lectures/LectureEditor';
import LectureRepository from '@/repositories/admin/lectures';

export default Vue.extend({
  name: 'LectureEditPage',
  layout: 'admin',
  components: {
    LectureEditor
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['couses-id'].course
    }
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
        path: `/admin/courses/${this.course.slug}/batches/${batchId}/lectures`,
      })
    }
  }
})
</script>