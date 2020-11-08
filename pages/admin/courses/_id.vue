<template>
  <div>
    <CourseEditor 
      :course="course"
    />
  </div>
</template>
 
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex';
import CourseEditor from '@/components/Course/CourseEditor';
import CourseRepository from '@/repositories/courses';

export default Vue.extend({
  name: 'CourseEditPage',
  layout: 'admin',
  components: {
    CourseEditor
  },
  data() {
    return {
      course: null
    }
  },
  async asyncData({ params }) {
    const course = await CourseRepository.fetchById(params.id)

    return {
      course
    }
  }
})
</script>