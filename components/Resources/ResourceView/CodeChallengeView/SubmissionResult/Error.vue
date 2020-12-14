<template>
  <div class="p-5">
    <h2>Compilation Error</h2>
    <div class="font-sm my-2">Check the compiler output, fix the error and try again.</div>
    <div class="divider-h my-4"></div>
    <div class="font-sm bold">Compile Message</div>
    <div class="bg-grey-light-2 p-4 mt-3">
      <pre class="p-2 font-sm">{{output}}</pre>
    </div>
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
