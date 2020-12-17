<template>
  <div class="row">
    <div class="col-6">
       <form action="" @submit.prevent="() => saveCourse.run()">
        <vue-form-generator
          :schema="schema"
          :model="course"
          :options="formOptions"
        />
        <h2 class="py-3">Syallabus</h2>
          <VMarkdown
          :markdown="course.syllabus"
        />
        <button
          class="button-solid button-orange my-3 px-5 float-right"
          :disabled="saveCourse.isActive"
        >
          {{ saveCourse.isActive ? 'Saving...' : 'Save' }}
        </button>
      </form>
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
    CourseCard
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
        } else {
          yield CourseRepository.create(this.course)
        }
      }).flow('drop'),
    }
  },
})
</script>
