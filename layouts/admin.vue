<template>
  <div class="a-cbm pt-4">
    <div class="a-cbj">
      <AdminNavbar />
      <div class="container">
        <Nuxt />
      </div>
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
