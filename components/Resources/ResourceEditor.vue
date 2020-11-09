<template>
  <form action="" @submit.prevent="() => saveResource.run()">
    <vue-form-generator
      :schema="schema"
      :model="resource"
      :options="formOptions"
    />
    <button 
      class="d-flex justify-content-end button-solid button-orange mx-auto" 
      :disabled="saveResource.isActive"
    >
      {{ saveResource.isActive ? 'Saving...' : 'Save' }}
    </button>
  </form>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { Resource } from '@/store/resources';
import resourceFormSchema from '@/forms/resourceForms'
import ResourceRepository from '@/repositories/resources';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      schema: resourceFormSchema,
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true
      }
    }
  },
  tasks(t) {
    return {
      saveResource: t(function *() {
        if (this.resource.id) {
          yield ResourceRepository.update(this.resource.id, this.resource);
        } else {
          yield ResourceRepository.create(this.resource)
        }
      })
      .flow('drop')
    }
  }
})
</script>
