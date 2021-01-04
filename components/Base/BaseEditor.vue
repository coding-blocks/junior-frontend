<template>
  <div>
    <vue-form-generator
      :schema="formSchema"
      :model="model"
    />
    <div v-if="saveTask.lastStarted && saveTask.lastStarted.isRejected">
      <div 
        class="red"
        v-for="error in saveTask.lastStarted.error.response.data.errors"
        :key="error"
      >
        {{error.title}}
      </div>
    </div>
    <button
      class="button-solid button-orange my-3 px-5 float-right"
      type="submit"
      @click="saveTask.run()"
      :disabled="saveTask.isActive"
    >
      {{ saveTask.isActive ? 'Saving...' : 'Save' }}
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    model: {
      type: Object,
      required: true
    },
    formSchema: {
      type: Object,
      required: true
    },
    saveTask: {
      type: Object,
      required: true
    }
  }  
})
</script>
