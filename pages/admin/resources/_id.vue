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
import ResourceRepository from '@/repositories/resources';

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
    const course = await ResourceRepository.fetchById(params.id)

    return {
      course
    }
  }
})
</script>