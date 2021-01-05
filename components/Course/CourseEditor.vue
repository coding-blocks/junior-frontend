<template>
  <div class="row">
    <div class="col-6">
      <BaseEditor 
        :model="course"
        :formSchema="schema"
        :saveTask="saveCourse"
      />
    </div>
    <div class="col-6">
      <CourseCard 
        :course="course"
      />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import BaseEditor from '@/components/Base/BaseEditor.vue';
import { mapActions, mapGetters } from 'vuex'
import courseForm from '@/forms/course'
import CourseRepository from '@/repositories/admin/courses'
import VMarkdown from '@/components/Base/VMarkdown.vue';
import CourseCard from '@/components/Course/CourseCard.vue'

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
  components: {
    VMarkdown,
    CourseCard,
    BaseEditor
  },
  data() {
    return {
      schema: courseForm(),
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },
  tasks(t) {
    return {
      saveCourse: t(function* () {
        if (this.course.id) {
          yield CourseRepository.update(this.course.id, this.course)
          yield CourseRepository.updateTags(
            this.course.id,
            this.course.tags
          )
        } else {
          yield CourseRepository.create(this.course)
        }
        this.$emit('onAfterSave')
      }).flow('drop'),
    }
  },
})
</script>
