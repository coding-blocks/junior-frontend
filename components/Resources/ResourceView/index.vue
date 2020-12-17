<template>
  <div class="mt-5">
    <component 
      :is="resourceTypeComponent" 
      :resource="resource"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import DocumentView from '@/components/Resources/ResourceView/DocumentView.vue';
import VideoView from '@/components/Resources/ResourceView/VideoView.vue';
import QuizView from '@/components/Resources/ResourceView/QuizView/index.vue';
import CodeChallenge from '@/components/Resources/ResourceView/CodeChallengeView/index.vue';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  computed: {
    resourceTypeComponent() {
      switch(this.resource.type) {
        case 'document': return DocumentView;
        case 'video': return VideoView;
        case 'quiz': return QuizView;
        case 'code-challenge': return CodeChallenge;
      }
    }
  }
})
</script>
