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
    <div class="search-bar">
      <input type="text" placeholder="Search Here" />
      <i class="fas fa-search icon"></i>
    </div>
    <ul class="list-divided mt-4">
      <li
        class="lectures flex-row justify-content-around items-center px-4 py-3"
        v-for="lecture in lectures"
        :key="lecture.id"
      >
        <div>{{ lecture.title }}</div>
        <div>
          <nuxt-link
            class="button-solid button-orange mx-auto"
            :to="`lectures/${lecture.id}`"
          >
            Edit</nuxt-link
          >
        </div>
        <div>
          <nuxt-link
            class="button-solid button-orange mx-auto"
            :to="`lectures/${lecture.id}/resources`"
          >
            Resources</nuxt-link
          >
        </div>
      </li>
    </ul>
    <nuxt-link
      class="button-solid button-orange mx-auto mt-4"
      to="lectures/add"
    >
      Create Lecture
    </nuxt-link>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'
import Button from '@/components/Base/Button.vue'
import BatchRepository from '@/repositories/admin/batches'

export default Vue.extend({
  components: {
    Button,
  },
  data() {
    return {
      lectures: [],
    }
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id'].course
    },
  },
  async asyncData({ params }) {
    const lectures = await BatchRepository.fetchLectures(Number(params.batchId))

    return {
      lectures,
    }
  },
})
</script>
