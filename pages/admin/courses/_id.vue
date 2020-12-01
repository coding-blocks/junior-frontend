<template>
  <div>
    <nuxt-link
      class="button-solid button-orange my-3 px-5 float-right"
      :to="`/admin/courses/${this.$route.params.id}/batches`"
      >Batches</nuxt-link
    >
    <CourseEditor :course="course" />
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import CourseEditor from '@/components/Course/CourseEditor.vue'
import CourseRepository from '@/repositories/admin/courses'

export default Vue.extend({
  name: 'CourseEditPage',
  layout: 'admin',
  components: {
    CourseEditor,
  },
  data() {
    return {
      course: null,
    }
  },
  async asyncData({ params }) {
    const course = await CourseRepository.fetchById(Number(params.id))

    return {
      course,
    }
  },
})
</script>