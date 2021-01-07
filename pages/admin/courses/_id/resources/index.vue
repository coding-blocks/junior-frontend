<template>
  <div>
      <div class="flex-row">
      <button
        class="button-solid button-orange my-3 px-5 float-right"
        @click="$router.back()"
      >
        Go Back
      </button>
      <h4 class="py-4 mx-auto">You are editing course : {{ course.title }}</h4>
    </div>
    <VAsync :task="fetchResourcesTask">
      <template v-slot="{ value: resources }">
        <div class="d-flex">
          <SearchableResources
            @on-item-selected="dropdownSelection = $event"
            @on-item-reset="dropdownSelection = {}"
          />

          {{ dropdownSelection.name }}
          <TaskButton 
            :task="addResourceTask"
            text="Add"
            loadingText="Adding"
            :params="[dropdownSelection.id]"
          />
        </div>
        <ul class="list-divided mt-4">
          <li
            class="resources flex-row justify-content-around items-center px-4 py-3"
            v-for="resource in resources"
            :key="resource.id"
          >
            <div>{{ resource.title }}</div>
            <div>
              <TaskButton 
                :task="removeResourceTask"
                text="Remove"
                loadingText="Removing"
                :params="[resource.id]"
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
import { mapGetters, mapActions } from 'vuex'
import VAsync from '@/components/Base/VAsync.vue'
import TaskButton from '@/components/Base/TaskButton.vue';
import CourseRepository from '@/repositories/admin/courses'
import SearchableResources from '@/components/Resources/SearchableResources.vue'
import { mapState } from 'vuex'

export default Vue.extend({
  components: {
    SearchableResources,
    TaskButton,
    VAsync,
  },
  data() {
    return {
      dropdownSelection: {},
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
      fetchResourcesTask: t(async function () {
        return CourseRepository.fetchResources(this.course.id)
      }),
      addResourceTask: t(async function (resourceId) {
        await CourseRepository.addResource({
          courseId: this.$route.params.id,
          resourceId,
        })
        this.fetchResourcesTask.run()
      }),
      removeResourceTask: t(async function (resourceId) {
        await CourseRepository.removeResource(this.course.id, resourceId)
        this.fetchResourcesTask.run()
      })
    }
  },
})
</script>
