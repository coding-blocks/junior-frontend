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
import youtubeLiveForm from '@/forms/youtubeLive';
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
        case 'youtube':
          return DocumentRepository;
        case 'zoom':
          return DocumentRepository;
      }
    },
    lectureTypePayload() {
      switch(this.lecture.type) {
        case 'youtube':
          return this.lecture.youtubeLive;
        case 'zoom':
          return this.lecture.zoomMeeting;
      }
    },
    lectureTypeForm() {
      switch(this.lecture.type) {
        case 'youtube':
          return youtubeLiveForm({ modelPrefix: 'youtubeLive.'});
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
      saveLecture: t(async function () {
        if (this.lecture.type === 'zoom') {
          this.lecture.zoomMeeting.start_time = this.lecture.start_time
        }

        if (this.lecture.id) {
          await LectureRepository.update(this.lecture.id, this.lecture);
          await this.lectureTypeRepository.update(this.lectureTypePayload.id, this.lectureTypePayload);
        } else {
          await LectureRepository.create(this.lecture)
        }

        this.$emit('onAfterSave');
      })
      .flow('drop')
    }
  }
})
</script>
