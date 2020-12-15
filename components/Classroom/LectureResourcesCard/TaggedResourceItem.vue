<template>
  <div
    class="p-20 pointer mb-25 card"
    :class="resourceTypeClass"
  >
    <div class="row no-gutters align-items-center">
      <div class="mr-20">
        <img
          :src="resourceTypeIcon"
          style="height: 50px"
        />
      </div>
      <div class="flex-1">
        <div class="text-grey">{{resourceTypeName}}</div>
        <div class="font-5 bold">{{ resource.title }}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { getResourceTypeName, getResourceTypeIcon, getResourceTypeClass } from '@/utils/resource';

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
    resourceTypeName() {
      return getResourceTypeName(this.resource);
    },
    resourceTypeIcon() {
      return getResourceTypeIcon(this.resource);
    }
  }
})
</script>
