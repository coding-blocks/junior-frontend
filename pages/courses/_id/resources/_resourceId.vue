<template>
  <div class="container">
    <ResourceView
      :resource="resource"
    />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import ResourceRepository from '@/repositories/resources';
import ResourceView from '@/components/Resources/ResourceView/index.vue';

export default Vue.extend({
  components: {
    ResourceView
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
