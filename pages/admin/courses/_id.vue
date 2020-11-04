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

export default Vue.extend({
  name: 'CourseEditPage',
  layout: 'admin',
  components: {
    CourseEditor
  },
  mounted() {
    this.fetchCourse(this.$route.params.id)
  },
  computed: {
    ...mapGetters({
      getCourseById: 'courses/getById'
    }),
    course() {
      return this.getCourseById(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions({
      fetchCourse: 'courses/fetchById'
    })
  },
})
</script>