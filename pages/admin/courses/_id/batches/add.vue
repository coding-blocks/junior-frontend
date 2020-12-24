<template>
  <div>
    <BatchEditor 
      :batch="batch"
      @onAfterSave="afterSave"
    />
  </div>
</template>
 
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import BatchEditor from '@/components/Batches/BatchEditor';

export default Vue.extend({
  name: 'BatchAddPage',
  layout: 'admin',
  components: {
    BatchEditor
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id'].course
    }
  },
  data() {
    return {
      batch: {
        title: '',
        type: '',
        start: '',
        end: '',
        registrationStart: '',
        registrationEnd: '',
        maxSize:'',
        courseId:this.$route.params.id
      }
    }
  },
  methods: {
    afterSave() {
      this.$router.push({
        path: `/admin/courses/${this.course.id}/batches`,
      })
    },
  },
})
</script>