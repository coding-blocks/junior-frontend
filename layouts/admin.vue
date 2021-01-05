<template>
  <div class="a-cbm pt-4">
    <div class="a-cbj">
      <AdminNavbar />
      <div class="container">
        <Nuxt />
      </div>
    </div>
    <client-only>
      <notifications 
        group="admin" 
        position="bottom right"  
      />
    </client-only>
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
