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
<script>
import Vue from 'vue';
import { getResourceTypeIcon, getResourceTypeName, getResourceTypeClass } from '@/utils/resource';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  computed: {
    resourceTypeClass() {
      return getResourceTypeClass(this.resource);
    },
    resourceTypeIcon() {
      return getResourceTypeIcon(this.resource);
    },
    resourceTypeName() {
      return getResourceTypeName(this.resource);
    }
  }
})
</script>
