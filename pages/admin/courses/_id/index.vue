<template>
  <div>
    <nuxt-link
      class="button-solid button-orange my-3 px-5"
      :to="`${this.$route.params.id}/batches`"
    >
      Batches
    </nuxt-link>
    
    <CourseEditor :course="course" />
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import CourseEditor from '@/components/Course/CourseEditor.vue'
import CourseRepository from '@/repositories/admin/courses'

export default Vue.extend({
  components: {
    CourseEditor,
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id'].course
    }
  }
})
</script>