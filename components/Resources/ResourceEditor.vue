<template>
  <div>
    <BaseEditor 
      :model="resource"
      :formSchema="schema"
      :saveTask="saveResource"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import BaseEditor from '@/components/Base/BaseEditor.vue';
import { mapActions, mapGetters } from 'vuex';
import resourceForm from '@/forms/resource';
import ResourceRepository from '@/repositories/admin/resources';
import { getResourceTypeForm, getResourceTypeRepository, getResourceTypePayload } from '@/utils/resource';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  components: {
    BaseEditor
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
