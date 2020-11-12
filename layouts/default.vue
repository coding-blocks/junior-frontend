<template>
  <div class="a-cbm">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar';

export default Vue.extend({
  components: {
    Navbar
  }
})
</script>
