<template>
  <div>
    <VAsync :task="fetchFeaturesTask">
      <template v-slot="{ value: features }">
        <div class="d-flex justify-content-between">
         <vue-form-generator
          :schema="schema"
          :model="courseFeature"
          :options="formOptions"
        />

          <TaskButton
          class="h-50 align-self-center"
            :task="addFeatureTask"
            text="Add"
            loadingText="Adding"
            :params="[courseFeature]"
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
                :task="removeResourceTask"
                text="Remove"
                loadingText="Removing"
                :params="[feature.id]"
              />
            </div>
          </li>
        </ul>
      </template>
    </VAsync>
  </div>
</template>


<script>
import Vue from 'vue'
import { mapGetters, mapActions,mapState } from 'vuex'
import VAsync from '@/components/Base/VAsync.vue'
import TaskButton from '@/components/Base/TaskButton.vue'
import CourseRepository from '@/repositories/admin/courses'
import courseFeature from '@/forms/courseFeature'

export default Vue.extend({
  props: {
    courseFeature: {
      type: Object,
      required: true,
    },
  },
  components: {
    TaskButton,
    VAsync,
  },
  data() {
    return {
      dropdownSelection: {},
      schema: courseFeature(),
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id']?.course
    },
  },
  methods: {
    navigateToCreate() {
      this.$router.push('add')
    },
  },
  tasks(t) {
    return {
      fetchFeaturesTask: t(async function () {
        return CourseRepository.fetchFeatures(this.course.id)
      }),
      addFeatureTask: t(async function (courseFeature) {
        await CourseRepository.update(
          this.$route.params.id,
          this.course.courseFeature = [courseFeature]
        )
        this.fetchFeaturesTask.run()
      }),
      removeResourceTask: t(async function (resourceId) {
        await CourseRepository.removeResource(this.course.id, resourceId)
        this.fetchFeaturesTask.run()
      }),
    }
  },
})
</script>
