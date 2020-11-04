<template>
  <div class="a-ocb pt-4">
    <AdminNavbar />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AdminNavbar from '@/components/AdminNavbar.vue'

export default Vue.extend({
  name: 'AdminLayout',
  components: {
    AdminNavbar
  }
})
</script>
