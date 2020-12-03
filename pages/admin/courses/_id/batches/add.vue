<template>
  <div>
    <BatchEditor 
      :batch="batch"
    />
  </div>
</template>
 
<script>
import Vue from 'vue';
import BatchEditor from '@/components/Batches/BatchEditor';

export default Vue.extend({
  name: 'BatchAddPage',
  layout: 'admin',
  components: {
    BatchEditor
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
  }
})
</script>