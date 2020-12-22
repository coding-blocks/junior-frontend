<template>
  <div>
    <InstructorEditor 
      :instructor="instructor"
    />
  </div>
</template>
 
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex';
import InstructorEditor from '@/components/Instructors/InstructorEditor';
import InstructorRepository from '@/repositories/admin/instructors';

export default Vue.extend({
  name: 'CourseEditPage',
  layout: 'admin',
  components: {
    InstructorEditor
  },
  data() {
    return {
      instructor: null
    }
  },
  async asyncData({ params }) {
    const instructor = await InstructorRepository.fetchById(params.id)

    return {
      instructor
    }
  }
})
</script>