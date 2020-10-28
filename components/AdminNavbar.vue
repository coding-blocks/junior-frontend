<template>
  <nav class="w-full py-8 px-24 flex justify-between">
    <div> LOGO </div>

    <div class="links flex items-center">
      <div>Home</div>
      <nuxt-link to="/admin/courses"> Courses </nuxt-link>
      <div>Example Link</div>
      <Button>Login</Button>
    </div>
   </nav>
</template>


<script lang="ts">
import Vue from 'vue'
import Button from './Base/Button.vue'
export default Vue.extend({
  name: 'AdminNavbar',
  components: {
    Button
  }
})
</script>

<style scoped>
.links div {
  @apply px-4
}
</style>

