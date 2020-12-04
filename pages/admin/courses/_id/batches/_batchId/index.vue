<template>
  <div>
    <nuxt-link
      class="button-solid button-orange my-3 px-5"
      :to="`${this.$route.params.batchId}/lectures`"
      >Lectures</nuxt-link
    >
    <BatchEditor :batch="batch" />
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex';
import BatchEditor from '@/components/Batches/BatchEditor.vue';
import BatchRepository from '@/repositories/admin/batches';

export default Vue.extend({
  name: 'BatchEditPage',
  layout: 'admin',
  components: {
    BatchEditor
  },
  data() {
    return {
      batch: null
    }
  },
  async asyncData({ params }) {
    const batch = await BatchRepository.fetchById(Number(params.batchId))

    return {
      batch
    }
  }
})
</script>