<template>
  <div>
    This is /courses pages

    <ul>
      <li v-for="course in courses" :key="course.id"> {{course.title}} </li>
    </ul>


    <button @click="addNewCourse()" > Add new Course </button>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Base/Button.vue'

export default Vue.extend({
  name: 'CoursesAdminPage',
  layout: 'admin',
  components: {
    Button
  },
  data () {
    return {
      courses: <any>[]
    }
  },
  async asyncData ({$axios}) {
    const {data: {data: courses}} = await $axios.get('/courses')
    return { courses }
  },
  methods: {
    addNewCourse () {
      const newCourse = {
        id: 111221,
        title: 'New Dummy' // input field 
      }
      // api call to backend POST

      console.log("added")
      this.courses.push(newCourse)
    }
  }
})
</script>

