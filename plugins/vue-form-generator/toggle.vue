<template>
  <div>
    <input 
      type="checkbox" 
      class="tgl tgl-light"
      :id="$id('toggle')"
      v-model="value"
    >
    <label 
      class="tgl-btn"
      :for="$id('toggle')"
    ></label>
  </div>
</template>
<script>
import Vue from 'vue';
import { abstractField } from 'vue-form-generator'

export default Vue.extend({
  mixins: [abstractField],
  methods: {
    onCheckboxClick() {
      this.value = !this.value
    }
  }
})
</script>
<style lang="scss" scoped>
  .tgl {
    display: none;
    
    // add default box-sizing for this scope
    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before,
    & + .tgl-btn {
      box-sizing: border-box;
      &::selection {
        background: none;
      }
    }
    
    + .tgl-btn {
      outline: 0;
      display: block;
      width: 4em;
      height: 2em;
      position: relative;
      cursor: pointer;
      user-select: none;
      &:after,
      &:before {
        position: relative;
        display: block;
        content: "";
        width: 50%;
        height: 100%;
      }
      
      &:after {
        left: 0;
      }
      
      &:before {
        display: none;
      }
    }
    
    &:checked + .tgl-btn:after {
      left: 50%;
    }
  }

  .tgl-light {
    + .tgl-btn {
      background: #f0f0f0;
      border-radius: 2em;
      padding: 2px;
      transition: all .4s ease;
      &:after {
        border-radius: 50%;
        background: #fff;
        transition: all .2s ease;
      }
    }
    
    &:checked + .tgl-btn {
      background: #9FD6AE;
    }
  }
</style>
