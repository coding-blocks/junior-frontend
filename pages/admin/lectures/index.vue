<template>
  <div>
    <div class="search-bar">
      <input type="text" placeholder="Search Here" />
      <i class="fas fa-search icon"></i>
    </div>
    <ul class="list-divided mt-4">
      <li class="lectures flex items-center px-4 py-3" v-for="lecture in lectures" :key="lecture.id">
        <div>{{ lecture.title }} </div>
        <div> 
          <nuxt-link class="button-solid button-orange mx-auto" :to="`/admin/lectures/${lecture.id}`"> Edit</nuxt-link>
        </div>
      </li>
    </ul>
    <nuxt-link class="button-solid button-orange mx-auto mt-4" to="/admin/lectures/add"> Create Lecture </nuxt-link>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/Base/Button.vue';
import LectureRepository from '@/repositories/admin/lectures';

export default Vue.extend({
  components: {},
  data() {
    return {
      lectures: []
    }
  },
  async asyncData() {
    const lectures = await LectureRepository.fetchAll();

    return {
      lectures
    }
  }
})
</script>
