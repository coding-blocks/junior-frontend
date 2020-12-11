<template>
  <div>
    <vue-form-generator
      :schema="schema"
      :model="resource"
      :options="formOptions"
    />
    <div v-if="saveResource.lastStarted && saveResource.lastStarted.isRejected">
      <div 
        class="red"
        v-for="error in saveResource.lastStarted.error.response.data.errors"
        :key="error"
      >
        {{error.title}}
      </div>
    </div>
    <button
      class="d-flex justify-content-end button-solid button-orange mx-auto"
      type="submit"
      @click="saveResource.run()"
      :disabled="saveResource.isActive"
    >
      {{ saveResource.isActive ? 'Saving...' : 'Save' }}
    </button>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex';
import resourceForm from '@/forms/resource';
import ResourceRepository from '@/repositories/admin/resources';
import { getResourceTypeForm, getResourceTypeRepository, getResourceTypePayload } from '@/utils/resource';

export default Vue.extend({
  props: 
    {
      resource: {
        type: Object,
        required: true,
      },
    },
  computed: {
    resourceTypeRepository() {
      return getResourceTypeRepository(this.resource)
    },
    resourceTypePayload() {
      return getResourceTypePayload(this.resource)
    },
    resourceTypeForm() {
      return getResourceTypeForm(this.resource)
    },
    schema() {
      if (this.resourceTypeForm) {
        return resourceForm({ extraGroups: this.resourceTypeForm.groups })
      }
      return resourceForm()
    },
  },
  data() {
    return {
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },
  tasks(t) {
    return {
      saveResource: t(async function () {
        if (this.resource.id) {
          await ResourceRepository.update(this.resource.id, this.resource)
          await this.resourceTypeRepository.update(
            this.resourceTypePayload.id,
            this.resourceTypePayload
          )
        } else {
          await ResourceRepository.create(this.resource)
        }
        this.$emit('onAfterSave')
      }).flow('drop'),
    }
  },
})
</script>
