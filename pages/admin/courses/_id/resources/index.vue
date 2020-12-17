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
          <button
            v-if="dropdownSelection.name !== ''"
            class="button-solid button-orange mx-auto"
            @click="addResource(dropdownSelection.id)"
          >
            Add
          </button>
        </div>
        <ul class="list-divided mt-4">
          <li
            class="resources flex-row justify-content-around items-center px-4 py-3"
            v-for="resource in resources"
            :key="resource.id"
          >
            <div>{{ resource.title }}</div>
            <div>
              <button
                class="button-solid button-orange mx-auto"
                @click="removeResource(resource.id)"
              >
                Remove
              </button>
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
import Button from '@/components/Base/Button.vue'
import CourseRepository from '@/repositories/admin/courses'
import SearchableResources from '@/components/Resources/SearchableResources.vue'
import { mapState } from 'vuex'

export default Vue.extend({
  components: {
    SearchableResources,
    Button,
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
    removeResource(id) {
      CourseRepository.removeResource(id).then(() => {
        this.fetchResourcesTask.run()
      })
    },
    addResource(id) {
      CourseRepository.addResource({
        data: {
          courseId: this.$route.params.id,
          resourceId: id,
        },
      }).then(() => {
        this.fetchResourcesTask.run()
      })
    },
  },
  tasks(t) {
    return {
      fetchResourcesTask: t(function* () {
        return CourseRepository.fetchResources('3')
      }),
    }
  },
})
</script>
