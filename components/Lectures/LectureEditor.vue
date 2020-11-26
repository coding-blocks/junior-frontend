<template>
  <form action="" @submit.prevent="() => saveLecture.run()">
    <vue-form-generator
      :schema="schema"
      :model="lecture"
      :options="formOptions"
    />
    <button 
      class="d-flex justify-content-end button-solid button-orange mx-auto" 
      :disabled="saveLecture.isActive"
    >
      {{ saveLecture.isActive ? 'Saving...' : 'Save' }}
    </button>
  </form>
</template>
<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import lectureForm from '@/forms/lectures'
import zoomForm from '@/forms/zoomMeeting'
import LectureRepository from '@/repositories/admin/lectures';

import DocumentRepository from '@/repositories/admin/documents';

export default Vue.extend({
  props: {
    lecture: {
      type: Object,
      required: true
    }
  },
  computed: {
    lectureTypeRepository() {
      switch(this.lecture.type) {
        case 'pdf':
          return DocumentRepository;
        case 'quiz':
          return DocumentRepository;
      }
    },
    lectureTypePayload() {
      switch(this.lecture.type) {
        case 'youtube':
          return this.lecture.youtube;
        case 'zoom':
          return this.lecture.zoom;
      }
    },
    lectureTypeForm() {
      switch(this.lecture.type) {
        case 'youtube':
          return pdfForm({ modelPrefix: 'yt.'});
        case 'zoom':
          return zoomForm({ modelPrefix: 'zoomMeeting.' })
      }
    },
    schema() {
      if (this.lectureTypeForm) {
        return lectureForm({ extraGroups: this.lectureTypeForm.groups })
      }
      return lectureForm()
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
      saveLecture: t(function *() {
        if (this.lecture.id) {
          yield LectureRepository.update(this.lecture.id, this.lecture);
          yield this.lectureTypeRepository.update(this.lectureTypePayload.id, this.lectureTypePayload);
        } else {
          yield LectureRepository.create(this.lecture)
        }
      })
      .flow('drop')
    }
  }
})
</script>
