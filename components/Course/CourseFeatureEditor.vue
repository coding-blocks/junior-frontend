<template>
  <div>
    <div class="d-flex justify-content-between">
      <vue-form-generator
        :schema="schema"
        :model="courseFeature"
        :options="formOptions"
      />

      <Button
        class="h-50"
        @click="addFeatureTask(courseFeature)"
      >Add</button>
    </div>
    <ul class="list-divided mt-4">
      <li
        class="features flex-row justify-content-around items-center px-4 py-3"
        v-for="feature in features"
        :key="feature.id"
      >
        <div class="card all-center">
          <img :src="feature.logo" style="height: 50px" />
        </div>
        <div class="mt-20 font-5 bold t-align-c">
          {{ feature.title }}
        </div>
        <div>
          <!-- <TaskButton
            :task="removeResourceTask"
            text="Remove"
            loadingText="Removing"
            :params="[feature.id]"
          /> -->
        </div>
      </li>
    </ul>
    <Button
        @click="saveCourse()"
    >Save</button>
  </div>
</template>


<script>
import Vue from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'
import VAsync from '@/components/Base/VAsync.vue'
import TaskButton from '@/components/Base/TaskButton.vue'
import CourseRepository from '@/repositories/admin/courses'
import courseFeature from '@/forms/courseFeature'
import Button from '../Base/Button.vue'

export default Vue.extend({
  components: {
    TaskButton,
    VAsync,
    Button,
  },
  data() {
    return {
      schema: courseFeature(),
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
      courseFeature: {
        title: '',
        logo: '',
      },
    }
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id']?.course
    },
    features() {
      return this.routeDataMap['admin-courses-id']?.course.courseFeatures
    },
   
  },
  methods: {
    navigateToCreate() {
      this.$router.push('add')
    },
    addFeatureTask(courseFeature){
        this.features.push(courseFeature)
    },
    saveCourse(){
      return CourseRepository.updateFeatures(this.course.id,this.features)
    }
  },
})
</script>
