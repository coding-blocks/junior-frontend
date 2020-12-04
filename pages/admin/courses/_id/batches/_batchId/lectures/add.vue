<template>
  <div>
    <LectureEditor 
      :lecture="lecture"
    />
  </div>
</template>
 
<script>
import Vue from 'vue';
import LectureEditor from '@/components/Lectures/LectureEditor';

export default Vue.extend({
  name: 'LectureAddPage',
  layout: 'admin',
  components: {
    LectureEditor
  },
  data({params}) {
    return {
      lecture: {
        title: '',
        type: '',
        start_time:'',
        batchId:params.batchId
      }
    }
  }
})
</script>