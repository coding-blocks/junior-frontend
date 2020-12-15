<template>
  <div>
    <h2 class="py-3">You are editing for {{ course.title }}</h2>
    <div class="d-flex">
      <SearchableResources
        :courseId="`${this.$route.params.id}`"
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
            Remove</button
          >
        </div>
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Button from '@/components/Base/Button.vue'
import CourseRepository from '@/repositories/admin/courses'
import SearchableResources from '@/components/Resources/SearchableResources.vue'
import { mapState } from 'vuex'

export default Vue.extend({
  components: {
    SearchableResources,
    Button,
  },
  data() {
    return {
      dropdownSelection: {
      },
    }
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id']?.course
    },
  },
  async asyncData({ params }) {
    const resources = await CourseRepository.fetchResources(params.id)

    return {
      resources,
    }
  },
  methods: {
    navigateToCreate() {
      this.$router.push('add')
    },
    removeResource(id) {
     CourseRepository.removeResource(this.$route.params.id,{
        resource: { id },
     })
    },
    addResource(id) {
      CourseRepository.addResource(this.$route.params.lectureId, {
        resource: { id },
      })
    }
  },
})
</script>
