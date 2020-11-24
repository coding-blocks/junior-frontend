<template>
  <div
    class="card bg-grey-light-1 position-relative"
    style="height: 200px"
  >
    <div class="position-absolute w-100 h-100 z-pos all-center tl">
      <span
        class="py-10 px-15 br-50 heading-6 bold white bg-gradient-pink-light"
      >
        Video
      </span>
    </div>
  </div> 
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    }
  }  
})
</script>
