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
<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import courseForm from '@/forms/course'
import CourseRepository from '@/repositories/courses';

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      schema: courseForm(),
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  tasks(t) {
    return {
      saveCourse: t(function *() {
        if (this.course.id) {
          yield CourseRepository.update(this.course.id, this.course);
        } else {
          yield CourseRepository.create(this.course)
        }
      })
      .flow('drop')
    }
  }
})
</script>
