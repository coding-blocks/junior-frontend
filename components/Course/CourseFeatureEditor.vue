<template>
  <div>
    <div class="d-flex justify-content-between">
      <vue-form-generator
        :schema="schema"
        :model="courseFeature"
        :options="formOptions"
      />
      <TaskButton
        class="h-50"
        :task="addFeatureTask"
        text="Add"
        loadingText="Adding"
      />
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
          <TaskButton
            class="h-50"
            :task="removeFeatureTask"
            :params="[feature]"
            text="Remove"
            loadingText="Removing"
          />
        </div>
      </li>
    </ul>
    <TaskButton :task="saveCourseTask" text="Save" loadingText="Saving" />
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
  },
  tasks(t) {
    return {
      saveCourseTask: t(async function () {
        return CourseRepository.updateFeatures(this.course.id, this.features)
      }),
      addFeatureTask: t(async function () {
        return this.features.push(this.courseFeature)
      }),
      removeFeatureTask: t(async function (feature) {
        return this.features.splice(this.features.indexOf(feature), 1);
      }),
    }
  },
})
</script>
