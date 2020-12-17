<template>
  <div>
    <h2 class="py-3">You are editing for {{ course.title }}</h2>
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
                :params="[resource.id]"
                text="Remove"
                loadingText="Removing"
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
import VAsync from '@/components/Base/VAsync.vue'
import TaskButton from '@/components/Base/TaskButton.vue';
import LectureRepository from '@/repositories/admin/lectures'
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
    lecture() {
      return this.routeDataMap['admin-lectures-lectureId']?.lecture
    },
  },
  methods: {
    navigateToCreate() {
      this.$router.push('add')
    },
    removeResource(resourceId) {
      
    },
  },
  tasks(t) {
    return {
      fetchResourcesTask: t(async function () {
        return LectureRepository.fetchResources(this.lecture.id)
      }),
      addResourceTask: t(async function (resourceId) {
        await LectureRepository.addResource({
          lectureId: this.$route.params.lectureId,
          resourceId,
        })
        this.fetchResourcesTask.run()
      }),
      removeResourceTask: t(async function (resourceId) {
        await LectureRepository.removeResource(this.lecture.id, resourceId)
        this.fetchResourcesTask.run()
      })
    }
  },
})
</script>
