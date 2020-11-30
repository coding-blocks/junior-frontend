<template>
  <span>
    {{formattedDate}}  
  </span>
</template>
<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
  props: {
    date: {
      type: String,
      required: true
    },
    format: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return moment(this.date).format(this.format);
    }
  }
})
</script>
