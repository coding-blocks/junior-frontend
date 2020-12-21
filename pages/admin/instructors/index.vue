<template>
  <div>
    <div class="search-bar">
      <input type="text" placeholder="Search Here" />
      <i class="fas fa-search icon"></i>
    </div>
    <ul class="list-divided mt-4">
      <li class=" flex-row justify-content-around items-center px-4 py-3" v-for="instructor in instructors" :key="instructor.id">
        <div>{{ instructor.name }} </div>
        <div> 
          <nuxt-link class="button-solid button-orange mx-auto" :to="`/admin/instructors/${instructor.id}`"> Edit</nuxt-link>
        </div>
      </li>
    </ul>
    <nuxt-link class="button-solid button-orange mx-auto mt-4" to="/admin/instructors/add"> Create Instructor </nuxt-link>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/Base/Button.vue';
import InstructorRepository from '@/repositories/admin/instructors';

export default Vue.extend({
  components: {},
  data() {
    return {
      instructors: []
    }
  },
  async asyncData() {
    const instructors = await InstructorRepository.fetchAll();

    return {
      instructors
    }
  }
})
</script>
