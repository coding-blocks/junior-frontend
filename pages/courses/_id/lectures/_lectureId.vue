<template>
  <div class="container mt-50">
    <div class="row" style="height: calc(100vh - 150px)">
      <div class="col-lg-8 h-inherit pb-40">
        <LectureCard 
          :lecture="lecture"
        />
      </div>
      <div class="col-lg-4 h-inherit pb-40">
        <LectureResourcesCard 
          :lecture="lecture"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 mb-40">
        <NotesCard 
          :lecture="lecture"
        />
      </div>
      <div class="col-lg-4 mb-40">
        <OtherLecturesCard 
          :batch="batch"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LectureCard from '@/components/Classroom/LectureCard/index.vue';
import NotesCard from '@/components/Classroom/NotesCard.vue';
import OtherLecturesCard from '@/components/Classroom/OtherLecturesCard.vue';
import LectureResourcesCard from '@/components/Classroom/LectureResourcesCard.vue';
import LectureRepository from '@/repositories/lectures';
import CourseRepository from '@/repositories/courses';
import { hash } from 'rsvp';

export default Vue.extend({
  components: {
    LectureCard,
    NotesCard,
    OtherLecturesCard,
    LectureResourcesCard,
  },
  data() {
    return {
      lecture: null,
      batch: null
    }
  },
  async asyncData({ params }) {
    const lecture = LectureRepository.fetchById(Number(params.lectureId));
    const currentBatchAttempt = await CourseRepository.fetchCurrentBatchAttempt(Number(params.id));

    return hash({
      lecture,
      batch: currentBatchAttempt.batch
    })
  }
})
</script>
