<template>
  <div>
    <ResourceEditor 
      :resource="resource"
    />
  </div>
</template>
 
<script>
import Vue from 'vue';
import ResourceEditor from '@/components/Resources/ResourceEditor';

export default Vue.extend({
  name: 'ResourceAddPage',
  layout: 'admin',
  components: {
    ResourceEditor
  },
  data() {
    return {
      resource: {
        title: '',
        type: '',
      }
    }
  }
})
</script>