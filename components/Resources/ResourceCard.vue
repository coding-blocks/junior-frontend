<template>
  <div 
    class="card h-100"
    :class="resourceTypeClass"
  >
    <div class="flex-col justify-content-between h-100">
      <div class="t-align-r w-100">
        <img 
          :src="resourceTypeIcon" 
          style="height: 45px;"
        >
      </div>
      <div class="side-tag side-tag--rounded mt-1 w-100">
        <div class="font-5 bold">{{resource.title}}</div>
        <div class="font-3 mt-1">{{resourceTypeName}}</div>
      </div>
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
  },
  computed: {
    resourceTypeClass() {
      switch(this.resource.type) {
        case 'pdf': return 'notes-card'
        case 'hb_content': return 'code-card'
        case 'video': return 'video-card'
        default: return 'notes-card'
      }
    },
    resourceTypeIcon() {
      switch(this.resource.type) {
        case 'pdf': return 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/folder-yellow.svg'
        case 'hb_content': return 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/calender-green.svg'
        case 'video': return 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/play-red.svg'
        default: return 'https://cb-thumbnails.s3.ap-south-1.amazonaws.com/folder-yellow.svg'
      }
    },
    resourceTypeName() {
      switch(this.resource.type) {
        case 'pdf': return 'PDF Notes'
        case 'hb_content': return 'Problem'
        case 'video': return 'Video Lecture'
        default: return 'notes-card'
      }
    }
  }
})
</script>
