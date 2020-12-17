<template>
  <button 
    class="button-solid button-orange"
    @click="onClick"
    :disabled="task.isActive"
  >
    {{task.isActive ? loadingText : text}}
  </button>
</template>
<script lang="ts">
import Vue from 'vue';
import VAsync from '@/components/Base/VAsync.vue';

export default Vue.extend({
  props: {
    task: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    loadingText: {
      type: String,
      default: 'Loading'
    },
    params: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onClick() {
      this.task.run(...this.params)
    }
  }
})
</script>
