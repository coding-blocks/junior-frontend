<template>
  <div class="container">
    <div class="search-bar">
      <input type="text" placeholder="Search Here" />
      <i class="fas fa-search icon"></i>
    </div>
    <ul class="list-divided">
      <li v-for="course in courses" :key="course.id">{{ course.title }}</li>
    </ul>
    <nuxt-link class="button-solid button-orange mx-auto" to="/admin/courses/add"> Create Course </nuxt-link>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Base/Button.vue'

export default Vue.extend({
  name: 'CoursesAdminPage',
  layout: 'admin',
  components: {},
  data() {
    return {
      courses: <any>[],
    }
  },
  async asyncData({ $axios }) {
    const {
      data: { data: courses },
    } = await $axios.get('/courses')
    return { courses }
  },
  methods: {
    addNewCourse() {
      const newCourse = {
        id: 111221,
        title: 'New Dummy', // input field
      }
      // api call to backend POST

      console.log('added')
      this.courses.push(newCourse)
    },
  },
})
</script>

