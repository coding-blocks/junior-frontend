<template>
  <div>
    <InstructorEditor 
      @onAfterSave="afterSave" 
      :instructor="instructor" 
    />
  </div>
</template>
 
<script>
import Vue from 'vue'
import InstructorEditor from '@/components/Instructors/InstructorEditor'

export default Vue.extend({
  name: 'ResourceAddPage',
  layout: 'admin',
  components: {
    InstructorEditor,
  },
  data() {
    return {
      instructor: {
        name: '',
        email: '',
       'image': '',
        'description': ''
      },
    }
  },
  methods: {
    afterSave() {
      this.$router.push({
        path: '/admin/instructors',
      })
    },
  },
})
</script>