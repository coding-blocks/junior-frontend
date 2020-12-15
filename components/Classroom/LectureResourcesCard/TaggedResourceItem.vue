<template>
  <div
    class="p-20 pointer mb-25 card"
    :class="resourceTypeClass"
  >
    <nuxt-link
      :to="`/courses/${course.id}/lectures/${lecture.id}/resources/${resource.id}`"
      target="_blank"
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
    </nuxt-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { getResourceTypeName, getResourceTypeIcon, getResourceTypeClass } from '@/utils/resource';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    },
    lecture: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('current-batch-attempt', ['currentBatchAttempt']),
    course() {
      return this.currentBatchAttempt.course;
    },
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
