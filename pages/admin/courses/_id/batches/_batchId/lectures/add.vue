<template>
  <div>
    <LectureEditor 
      :lecture="lecture"
      @onAfterSave="afterSave"
    />
  </div>
</template>
 
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import LectureEditor from '@/components/Lectures/LectureEditor';

export default Vue.extend({
  name: 'LectureAddPage',
  layout: 'admin',
  components: {
    LectureEditor
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id'].course
    }
  },
  data() {
    return {
      lecture: {
        title: '',
        type: '',
        start_time:'',
        batchId: this.$route.params.batchId
      }
    }
  },
  methods: {
    afterSave() {
      this.$router.push({
        path: `/admin/courses/${this.course.id}/batches/${this.$route.params.batchId}/lectures`,
      })
    }
  }
})
</script>