<template>
    <form action="" @submit.prevent="() => saveInstructor.run()">
      <vue-form-generator
        :schema="schema"
        :model="instructor"
        :options="formOptions"
      />
      <button
        class="button-solid button-orange my-3 px-5 float-right"
        :disabled="saveInstructor.isActive"
      >
        {{ saveInstructor.isActive ? 'Saving...' : 'Save' }}
      </button>
    </form>
</template>
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import instructorForm from '@/forms/instructor'
import InstructorRepository from '@/repositories/admin/instructors'

export default Vue.extend({
  props: {
    instructor: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      schema: instructorForm(),
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },
  tasks(t) {
    return {
      saveInstructor: t(async function () {
        if (this.instructor.id) {
          await InstructorRepository.update(this.instructor.id, this.instructor)
        } else {
          await InstructorRepository.create(this.instructor)
        }
        this.$emit('onAfterSave')
      }).flow('drop'),
    }
  },
})
</script>
