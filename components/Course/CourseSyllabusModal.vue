<template>
  <div class="p-5">
    <h3 class="t-align-c">Course Syllabus</h3>
    <div>
      <VMarkdown 
        :markdown="course.syllabus"
      />
    </div>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue';
import VMarkdown from '@/components/Base/VMarkdown.vue';

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    VMarkdown,
  }
})
</script>
