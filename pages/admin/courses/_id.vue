<template>
  <div class="container">
    <form action="" @submit.prevent="updateCourse">
      <vue-form-generator
        :schema="schema"
        :model="model"
        :options="formOptions"
      />
      <button class="d-flex justify-content-end button-solid button-orange mx-auto" >{{ isSaving ? 'Saving...' : 'Update' }}</button>
    </form>
  </div>
</template>
 
<script>
import Vue from 'vue'
<<<<<<< HEAD
import courseFormSchema from '@/forms/courseForms'
=======
>>>>>>> b153bced96dea33b8565ba04f61e23c29fc3ff85

export default Vue.extend({
  name: 'CourseEditPage',
  layout: 'admin',
  data() {
    return {
      model: {},
      schema: courseFormSchema,
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
      isSaving: false,
    }
  },
  validate({ params }) {
    return !isNaN(+params.id)
  },
  mounted() {
    this.fetchCourse(this.$route.params.id)
  },
  methods: {
    async updateCourse() {
      try {
        await this.$axios.$patch(`/admin/courses/${this.$route.params.id}`, {
          ...this.model,
        })
        alert('Saved Successfully')
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
    },
    async fetchCourse(id) {
      try {
        const {
          data: { data: courses },
        } = await this.$axios.get(`/courses/${id}`)
        this.model = courses
      } catch (error) {
        console.log(e)
        alert(e.message)
      }
    },
  },
})
</script>