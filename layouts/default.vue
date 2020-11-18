<template>
  <div class="a-cbm">
    <div class="a-cbj">
      <Navbar />
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar,
  },
})
</script>
