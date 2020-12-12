<template>
  <div class="mt-5">
    <component 
      :is="resourceTypeComponent" 
      :resource="resource"
      :course="course"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import DocumentView from '@/components/Resources/ResourceView/DocumentView.vue';
import VideoView from '@/components/Resources/ResourceView/VideoView.vue';
import QuizView from '@/components/Resources/ResourceView/QuizView/index.vue';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    },
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    DocumentView,
    VideoView
  },
  computed: {
    resourceTypeComponent() {
      switch(this.resource.type) {
        case 'document': return DocumentView;
        case 'video': return VideoView;
        case 'quiz': return QuizView;
      }
    }
  }
})
</script>
