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
  data() {
    return {
      lecture: {
        title: '',
        type: '',
      }
    }
  }
})
</script>