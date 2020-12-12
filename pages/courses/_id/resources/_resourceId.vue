<template>
  <div class="container">
    <ResourceView
      :resource="resource"
      :course="course"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import ResourceRepository from '@/repositories/resources';
import ResourceView from '@/components/Resources/ResourceView/index.vue';

export default Vue.extend({
  components: {
    ResourceView
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['courses-id'].course
    }
  },
  data() {
    return {
      resource: null
    }
  },
  async asyncData({ params }) {
    const resource = await ResourceRepository.fetchById(Number(params.resourceId));

    return {
      resource
    }
  }
})
</script>
