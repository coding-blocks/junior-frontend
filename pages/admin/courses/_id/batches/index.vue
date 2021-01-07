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
        class="batches flex-row justify-content-around items-center px-4 py-3"
        v-for="batch in batches"
        :key="batch.id"
      >
        <div>{{ batch.title }}</div>
        <MomentFormat :date="batch.start" :format="'dddd, Do MMMM'" />
        <div>
          <nuxt-link
            class="button-solid button-orange mx-auto"
            :to="`batches/${batch.id}`"
            >Edit</nuxt-link
          >
        </div>
        <div>
          <nuxt-link
            class="button-solid button-orange mx-auto"
            :to="`batches/${batch.id}/lectures`"
            >Lectures</nuxt-link
          >
        </div>
        <div>
          <nuxt-link
            class="button-solid button-orange mx-auto"
            :to="`batches/${batch.id}/lectures/add`"
            >Create Lecture</nuxt-link
          >
        </div>
        <div>
          <ToggleButton :value="batch.acceptingAdmissions" :labels="{checked: 'On', unchecked: 'Off'}" @change="updateBatchEnrollments($event.value, batch)" />
        </div>
      </li>
    </ul>
    <nuxt-link
      class="button-solid button-orange mx-auto mt-4"
      :to="`batches/add`"
    >
      Create Batch
    </nuxt-link>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'
import Button from '@/components/Base/Button.vue'
import MomentFormat from '@/components/Base/Moment/MomentFormat.vue'
import CourseRepository from '@/repositories/admin/courses'
import BatchRepository from '@/repositories/admin/batches'
import { ToggleButton } from 'vue-js-toggle-button'

export default Vue.extend({
  components: {
    MomentFormat,
    ToggleButton,
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id'].course
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
      this.$router.push('add')
    },
    updateBatchEnrollments(value, batch){
      batch.acceptingAdmissions = value
      BatchRepository.update(batch.id,batch)
    }
  },
})
</script>
