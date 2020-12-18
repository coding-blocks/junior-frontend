<template>
  <div class="row no-gutters">
    <div class="mr-30">
      <select class="dropdown d-inline-block" v-model="value">
        <option v-for="spec in colorSpecs" :key="spec.name" :value="spec.name">
          {{spec.name}}
        </option>
      </select>
    </div>
    <div :class="value" style="height: 20px; width: 80px"></div>
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  data() {
    return {
      colorSpecs: [
        { name: 'bg-gradient-orange-dark' },
        { name: 'bg-gradient-orange' },
        { name: 'bg-gradient-orange-light' },
        { name: 'bg-gradient-green-dark' },
        { name: 'bg-gradient-green' },
        { name: 'bg-gradient-green-light' },
        { name: 'bg-gradient-blue-dark' },
        { name: 'bg-gradient-blue' },
        { name: 'bg-gradient-blue-light' },
        { name: 'bg-gradient-purple-dark' },
        { name: 'bg-gradient-purple' },
        { name: 'bg-gradient-purple-light' },
        { name: 'bg-gradient-pink-dark' },
        { name: 'bg-gradient-pink' },
        { name: 'bg-gradient-pink-light' },
        { name: 'bg-gradient-blue-purple-light' },
        { name: 'bg-gradient-blue-purple-dark' },
        { name: 'bg-gradient-purple-pink-light' },
        { name: 'bg-gradient-purple-pink-dark' },
      ],
    }
  },
  mixins: [abstractField],
}
</script>