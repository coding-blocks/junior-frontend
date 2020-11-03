<template>
  <div class="container">
    <form>
      <vue-form-generator
        :schema="schema"
        :model="model"
        :options="formOptions"
        @validated="onNewCourse"
      >
      </vue-form-generator>
    </form>
  </div>
</template>

<script>
import Vue from 'vue'
const VueFormGenerator = require('vue-form-generator')
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormGenerator)

export default Vue.extend({
  data() {
    return {
      model: {
        title:'',
        description:'',
        slug:'',
        syllabus:''
      },

      schema: {
        groups: [
          {
            legend: 'Course Details',
            fields: [
              {
                type: 'input',
                inputType: 'text',
                label: 'Course Name',
                model: 'title',
                placeholder: 'Enter course name',
                help: 'This will be the title for the course',
                required: true,
              },
              {
                type: 'textArea',
                inputType: 'text',
                label: 'Course description',
                model: 'description',
                placeholder: 'Enter course name',
                help: 'This will be the summary for the course',
                required: true,
              },
              {
                type: 'input',
                inputType: 'text',
                label: 'Slug',
                model: 'slug',
                help: `This will be the <a href="https://stackoverflow.com/questions/19335215/what-is-a-slug"> slug </a> for the course.
                  Use kebab-case (hyphen separated) name and avoid special characters if you can) For example: c++-for-beginners`,
                placeholder: 'This will be the slug for the course',
                required: true,
              },
              {
                type: 'textArea',
                inputType: 'text',
                label: 'Course Syallabus',
                model: 'syllabus',
                placeholder: 'Enter course syllabus json',
                help: 'This will be the syllabus for the course',
                required: true,
              },
              {
                type: 'submit',
                buttonText: 'Create',
                validateBeforeSubmit : true,
                onSubmit:() => this.addNewCourse()
              }
            ],
          },
        ],
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },
  methods: {
    async addNewCourse() {
      // api call to backend POST
      try {
        await this.$axios.$post(
          '/admin/courses',
          {
            ...this.model,
          }
        )
        alert('Saved Successfully')
      } catch (e) {
        console.log(e)
        alert(e.message)
      }
    },
  },
})
</script>