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
<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import resourceForm from '@/forms/resource'
import pdfForm from '@/forms/pdf'
import videoForm from '@/forms/video'
import ResourceRepository from '@/repositories/admin/resources';

import DocumentRepository from '@/repositories/admin/documents';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  computed: {
    resourceTypeRepository() {
      switch(this.resource.type) {
        case 'pdf':
          return DocumentRepository;
        case 'quiz':
          return DocumentRepository;
        case 'hb_content':
          return DocumentRepository;
        case 'video':
          return DocumentRepository;
      }
    },
    resourceTypePayload() {
      switch(this.resource.type) {
        case 'pdf':
          return this.resource.document;
        case 'quiz':
          return this.resource.quiz;
        case 'hb_content':
          return this.resource.hb_content;
        case 'video':
          return this.resource.video;
      }
    },
    resourceTypeForm() {
      switch(this.resource.type) {
        case 'pdf':
          return pdfForm({ modelPrefix: 'document.' });
        case 'quiz':
          return pdfForm({ modelPrefix: 'document.' });
        case 'hb_content':
          return pdfForm({ modelPrefix: 'document.' });
        case 'video':
          return videoForm({ modelPrefix: 'video.' })
      }
    },
    schema() {
      if (this.resourceTypeForm) {
        return resourceForm({ extraGroups: this.resourceTypeForm.groups })
      }
      return resourceForm()
    }
  },
  data() {
    return {
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
          yield this.resourceTypeRepository.update(this.resourceTypePayload.id, this.resourceTypePayload);
        } else {
          yield ResourceRepository.create(this.resource)
        }
      })
      .flow('drop')
    }
  }
})
</script>
