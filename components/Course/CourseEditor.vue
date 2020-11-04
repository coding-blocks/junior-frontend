<template>
  <form action="" @submit.prevent="() => saveCourse.run()">
    <vue-form-generator
      :schema="schema"
      :model="course"
      :options="formOptions"
    />
    <button 
      class="d-flex justify-content-end button-solid button-orange mx-auto" 
      :disabled="saveCourse.isActive"
    >
      {{ saveCourse.isActive ? 'Saving...' : 'Save' }}
    </button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { Course } from '@/store/courses';
import courseFormSchema from '@/forms/courseForms'

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      schema: courseFormSchema,
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  methods: {
    ...mapActions({
      updateCourse: 'courses/updateById',
      createCourse: 'courses/create'
    })
  },
  tasks(t) {
    return {
      saveCourse: t(function *() {
        if (this.course.id) {
          yield this.updateCourse({ id: this.course.id, obj: this.course });
        } else {
          yield this.createCourse(this.course);
        }
      })
      .flow('drop')
    }
  }
})
</script>
