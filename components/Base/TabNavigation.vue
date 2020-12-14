<template>
  <div>
    <div class="tab-nav-underline">
      <div 
        class="tab py-20"
        v-for="(tab, index) in tabs"
        :key="tab.name"
        :class="index === selectedTabIndex && 'active'"
        @click="setSelectedTabIndex(index)"
      >
        {{tab.name}}
      </div>
    </div>
    <div class="py-20">
      <slot :component="component" v-if="isSlotted"></slot>
      <div v-else>
        <component 
          :is="component" 
        />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    /*
      [
        { name: '', component: '' }
      ]
    */
    tabs: {
      type: Array,
      required: true
    },
    isSlotted: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      selectedTabIndex: 0
    }
  },
  computed: {
    component() {
      return this.tabs[this.selectedTabIndex].component;
    }
  },
  methods: {
    setSelectedTabIndex(index) {
      this.selectedTabIndex = index;
    }
  }
})
</script>
