<template>
  <div>
    <div>
      {{course.title}}
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search Here" />
      <i class="fas fa-search icon"></i>
    </div>
    <ul class="list-divided mt-4">
      <li
        class="batches flex-row justify-content-around items-center px-4 py-3"
        v-for="batch in batches"
        :key="batch.id"
      >
        <div>{{ batch.title }}</div>
        <div>{{ batch.start }}</div>
        <div>
          <nuxt-link
            class="button-solid button-orange mx-auto"
            :to="`batches/${batch.id}`"
          >
            Edit</nuxt-link
          >
        </div>
      </li>
    </ul>
    <nuxt-link class="button-solid button-orange mx-auto mt-4" :to="`batches/add`">
      Create Batch
    </nuxt-link>

  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import Button from '@/components/Base/Button.vue'
import CourseRepository from '@/repositories/admin/courses'
import { mapState } from 'vuex';


export default Vue.extend({
  components: {},
  data() {
    return {
      // courses: [],
    }
  },
    computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id']?.course
    },
  },
  async asyncData({ params }) {
    const batches = await CourseRepository.fetchBatches(params.id)

    return {
      batches,
    }
  },
  methods: {
    navigateToCreate() {
      this.$router.push('add');
    }
  }
})
</script>
