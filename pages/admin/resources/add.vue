<template>
  <div>
    <ResourceEditor 
      :resource="resource" 
      @onAfterSave="afterSave" 
    />
  </div>
</template>
 
<script>
import Vue from 'vue'
import ResourceEditor from '@/components/Resources/ResourceEditor'

export default Vue.extend({
  name: 'ResourceAddPage',
  layout: 'admin',
  components: {
    ResourceEditor,
  },
  data() {
    return {
      resource: {
        title: '',
        type: '',
      },
    }
  },
  methods: {
    afterSave() {
      this.$router.push({
        path: '/admin/resources',
      })
    },
  },
})
</script>