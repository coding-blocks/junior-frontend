<template>
  <div>
    <BaseEditor 
      :model="instructor"
      :formSchema="schema"
      :saveTask="saveInstructor"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import BaseEditor from '@/components/Base/BaseEditor.vue';
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
  components: {
    BaseEditor
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
