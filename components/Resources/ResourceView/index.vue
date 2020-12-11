<template>
  <component 
    :is="resourceTypeComponent" 
    :resource="resource"
  />
</template>
<script>
import Vue from 'vue'
import PDFView from '@/components/Resources/ResourceView/PDFView.vue';
import VideoView from '@/components/Resources/ResourceView/VideoView.vue';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  components: {
    PDFView,
    VideoView
  },
  computed: {
    resourceTypeComponent() {
      switch(this.resource.type) {
        case 'pdf': return PDFView;
        case 'video': return VideoView;
      }
    }
  }
})
</script>
