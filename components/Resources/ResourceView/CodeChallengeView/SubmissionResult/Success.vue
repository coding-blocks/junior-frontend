<template>
  <div class="p-5">
    <span class="font-sm bold">
      Compilation Successful
    </span>
    <pre class="mt-3 bg-grey-light-2 p-4">{{output}}</pre>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    output: {
      type: String,
      required: true
    }
  }  
})
</script>
