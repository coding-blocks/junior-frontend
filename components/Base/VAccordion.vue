<template>
  <div>
    <div 
      class="border br-20 pointer mt-30"
      v-for="(tab, index) in tabs"
      :key="`tab-${index}`"
      @click="setActiveTabIndex(index)"
    >
      <div class="br-20 bg-grey-light-2 py-20 px-30 bold">
        <div
          class="row no-gutters align-items-center justify-content-between"
        >
          <div class="flex-1">
            {{tab.title}}
          </div>
          <div> 
            {{activeTabIndex === index ? '-' : '+'}}
          </div>
        </div>
      </div>
      <div 
        class="py-20 px-30"
        v-if="activeTabIndex === index"
      >
        {{tab.description}}
      </div>
    </div>
  </div> 
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTabIndex: 0
    }
  },
  methods: {
    setActiveTabIndex(value) {
      this.activeTabIndex = value
    }
  }
})
</script>
