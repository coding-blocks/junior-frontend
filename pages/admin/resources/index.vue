<template>
  <div>
    <div class="search-bar">
      <input type="text" placeholder="Search Here" />
      <i class="fas fa-search icon"></i>
    </div>
    <ul class="list-divided mt-4">
      <li class="resources flex items-center px-4 py-3" v-for="resource in resources" :key="resource.id">
        <div>{{ resource.title }} </div>
        <div> 
          <nuxt-link class="button-solid button-orange mx-auto" :to="`/admin/resources/${resource.id}`"> Edit</nuxt-link>
        </div>
      </li>
    </ul>
    <nuxt-link class="button-solid button-orange mx-auto mt-4" to="/admin/resources/add"> Create Resource </nuxt-link>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/Base/Button.vue';

export default Vue.extend({
  components: {},
  mounted() {
    this.fetchResources()
  },
  computed: {
    ...mapGetters({
      resources: 'resources/list'
    })
  },
  methods: {
    ...mapActions({
      fetchResources: 'resources/fetchAll'
    })
  }
})
</script>
