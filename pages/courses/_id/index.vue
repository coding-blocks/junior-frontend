<template>
  <div class="pt-50">
    <CourseBannerWithAttempt
      :course="course"
      :batchAttempt="currentBatchAttempt"
      v-if="currentBatchAttempt"
    />
    <CourseBanner 
      :course="course"
      v-else
    />

    <div v-if="currentBatchAttempt">
      <div
        class="pt-xl-100 pt-lg-75 pt-md-50 pt-30 px-xl-100 px-lg-75 px-md-50 px-sm-30 px-20"
      >
        <div class="container">
          <div class="heading-5 bold t-align-c">Recorded Lectures</div>
        </div>
      </div>
      <VAsync :task="fetchLecturesTask">
        <template v-slot="{ value: lectures }">
          <CourseRecordedLectureCarousel 
            :lectures="lectures"
          />
        </template>
      </VAsync>
    </div>

    <div class="divider-h"></div>

    <div class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20">
      <div class="container">
        <CourseDescriptionSection :course="course" />
      </div>
    </div>

    <div class="divider-h"></div>

    <div class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20">
      <div class="container">
        <CourseResourceSection :course="course" />
      </div>
    </div>

    <CourseReview 
      :course="course"
    />

    <div v-if="currentBatchAttempt">
      <div v-if="!isPaidBatch">
        <VAsync>
          <template v-slot="{ value: batches }">
            <CourseUpgradeToPremium 
              v-for="batch in batches"
              :key="batch.id"
              :batch="batch"
            />
          </template>
        </VAsync>
      </div>
    </div>
    <div v-else>
      <CourseBatchSection 
        :course="course"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import { hash } from 'rsvp';
import CourseBatchSection from '@/components/Course/CourseBatchSection.vue';
import CourseDescriptionSection from '@/components/Course/CourseDescriptionSection.vue';
import CourseResourceSection from '@/components/Course/CourseResourceSection.vue';
import CourseReview from '@/components/Course/CourseReview.vue';
import CourseBanner from '@/components/Course/CourseBanner.vue';
import CourseBannerWithAttempt from '@/components/Course/CourseBannerWithAttempt.vue';
import CourseRecordedLectureCarousel from '@/components/Course/CourseRecordedLectureCarousel.vue';
import CourseUpgradeToPremium from '@/components/Course/CourseUpgradeToPremium.vue';
import CourseRepository from '@/repositories/courses.ts';
import BatchRepository from '@/repositories/batches.ts';
import VAsync from '@/components/Base/VAsync.vue';
import { Course } from '~/repositories/admin/courses';
import { BatchAttempt } from '~/repositories/batch-attempt';
import { Lecture } from '~/repositories/lectures';
import { cachableAsyncData } from '~/utils/store';

export default Vue.extend({
  components: {
    CourseBatchSection,
    CourseDescriptionSection,
    CourseResourceSection,
    CourseReview,
    CourseBanner,
    CourseRecordedLectureCarousel,
    CourseUpgradeToPremium,
    VAsync,
  },
  computed: {
    ...mapState('session', ['user']),
    ...mapState('route-data', ['routeDataMap']),
    currentBatch() {
      return this.currentBatchAttempt.batch;
    },
    isPaidBatch() {
      return this.currentBatch?.type === 'paid'
    },
    course() {
      return this.routeDataMap['courses-id'].course
    },
    currentBatchAttempt() {
      return this.routeDataMap['courses-id'].currentBatchAttempt
    }
  },
  tasks(t) {
    return {
      fetchLecturesTask: t(function *() {
        if (this.currentBatchAttempt) {
          return BatchRepository.fetchLectures(this.currentBatchAttempt.batch.id);
        }
      }),
      fetchPremiumBatches: t(function *() {
        return CourseRepository.fetchBatches(this.course.id, {
          filter: {
            type: 'paid'
          }
        })
      })
    }
  }
})
</script>
