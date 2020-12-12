<template>
  <div class="card mb-30">
    <div class="side-tag side-tag--rounded side-tag--purple">
      <div class="font-4 bold mb-10">
        <MomentFormat 
          :date="lecture.start_time"
          :format="'dddd, MMM DD, hh:mmA'"
        />
      </div>
      <div class="font-4 text-grey-light-1">
        Lecture 6: {{lecture.title}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import MomentFormat from '@/components/Base/Moment/MomentFormat.vue';

export default Vue.extend({
  components: {
    MomentFormat
  },
  props: {
    lecture: {
      type: Object,
      required: true
    }
  }  
})
</script>
