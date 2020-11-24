<template>
  <div>
    <div v-show="showLoader">
      <slot name="loading"></slot>
    </div>
    <slot :value="value" v-if="showContent"></slot>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
      //TODO: write a validate fn
    },
    autoFire: {
      type: Boolean,
      defaultValue: true
    },
    emberStyle: {
      defaultValue: false
    }
  },
  mounted () {
    // fire this task, unless autoFire is disabled
    !this.autoFire && this.task.run()
  },
  computed: {
    showLoader () {
      return !this.emberStyle && this.task.isActive
    },
    showContent () {
      return (this.task.lastResolved?.value && this.emberStyle) || (!this.task.isActive && this.task.lastResolved)
    },
    value () {
      return this.showContent && this.task.lastResolved.value
    }
  }
}
</script>
