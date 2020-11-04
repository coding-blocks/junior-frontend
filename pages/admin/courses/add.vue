<template>
  <div>
    <form action="" @submit.prevent="addNewCourse">
      <vue-form-generator
        :schema="schema"
        :model="model"
        :options="formOptions"
      />Î
      <button class="d-flex justify-content-end button-solid button-orange mx-auto" >{{ isSaving ? 'Saving...' : 'Create' }}</button>
    </form>
  </div>
</template>
 
<script>
import Vue from 'vue'
import courseFormSchema from '@/forms/courseForms'

export default Vue.extend({
  name: 'CourseAddPage',
  layout: 'admin',
  data() {
    return {
      model: {
        title: '',
        description: '',
        slug: '',
        syllabus: '',
      },
      schema: courseFormSchema,
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
      isSaving: false,
    }
  },
  methods: {
    async addNewCourse() {
      // api call to backend POST
      try {
        await this.$axios.$post('/admin/courses', this.model)
        alert('Saved Successfully')
        redirect(302, '/admin/courses')
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
    },
  },
})
</script>