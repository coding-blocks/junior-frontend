<template>
  <div>
    <CourseEditor 
      :course="course"
      @onAfterSave="afterSave" 
    />
  </div>
</template>
 
<script>
import Vue from 'vue';
import CourseEditor from '@/components/Course/CourseEditor';

export default Vue.extend({
  name: 'CourseAddPage',
  layout: 'admin',
  components: {
    CourseEditor
  },
  data() {
    return {
      course: {
        title: '',
        description: '',
        slug: '',
        syllabus: '',
      }
    }
  },
  methods: {
    afterSave() {
      this.$router.push({
        path: '/admin/courses',
      })
    },
  },
})
</script>