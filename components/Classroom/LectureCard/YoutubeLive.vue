<template>
  <iframe 
    class="w-100 h-100"
    :src="`https://www.youtube.com/embed/${youtubeLive.video_id}`" 
    frameborder="0" 
    allowfullscreen></iframe>  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    youtubeLive: {
      type: Object,
      required: true
    }
  }
})
</script>
