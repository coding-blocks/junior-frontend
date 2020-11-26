<template>
  <div class="pt-50">
    <CourseBannerWithAttempt
      :course="course"
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
      <div class="row c-card-carousel mt-40 pb-xl-100 pb-lg-75 pb-md-50 pb-30">
        <div class="col-lg-3 col-md-4 col-sm-6 col-8">
          <div class="card course-video-card p-0">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/varun-bhaiya-python.svg"
            />
            <div class="lecture-tag">Lecture 1</div>
            <button class="button-primary floating-button">Start Learning</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-8">
          <div class="card course-video-card p-0">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/varun-bhaiya-python.svg"
            />
            <div class="lecture-tag">Lecture 1</div>
            <button class="button-primary floating-button">Start Learning</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-8">
          <div class="card course-video-card p-0">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/varun-bhaiya-python.svg"
            />
            <div class="lecture-tag">Lecture 1</div>
            <button class="button-primary floating-button">Start Learning</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-8">
          <div class="card course-video-card p-0 course-video-card--unwatched">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/varun-bhaiya-python.svg"
            />
            <div class="lecture-tag">Lecture 1</div>
            <button class="button-primary floating-button">Start Learning</button>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 col-8">
          <div class="card course-video-card p-0 course-video-card--unwatched">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/varun-bhaiya-python.svg"
            />
            <div class="lecture-tag">Lecture 1</div>
            <button class="button-primary floating-button">Start Learning</button>
          </div>
        </div>
      </div>
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

    <div
      class="pt-xl-100 pt-lg-75 pt-md-50 pt-30 px-xl-100 px-lg-75 px-md-50 px-sm-30 px-20"
    >
      <div class="container">
        <div class="heading-5 bold t-align-c">
          Choose from available batches
        </div>
      </div>
    </div>
    <div class="row c-card-carousel mt-40 pb-xl-100 pb-lg-75 pb-md-50 pb-30">
      <div class="col-xl-3 col-md-5 col-sm-7 col-10">
        <CourseBatchCardSmall :premium="true" />
      </div>
      <div class="col-xl-3 col-md-5 col-sm-7 col-10">
        <CourseBatchCardSmall :premium="false" />
      </div>
      <div class="col-xl-3 col-md-5 col-sm-7 col-10">
        <CourseBatchCardSmall :premium="false" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { hash } from 'rsvp';
import CourseBatchCardSmall from '@/components/Course/CourseBatchCardSmall.vue';
import CourseDescriptionSection from '@/components/Course/CourseDescriptionSection.vue';
import CourseResourceSection from '@/components/Course/CourseResourceSection.vue';
import CourseReview from '@/components/Course/CourseReview.vue';
import CourseBanner from '@/components/Course/CourseBanner.vue';
import CourseBannerWithAttempt from '@/components/Course/CourseBannerWithAttempt.vue';
import CourseRepository from '@/repositories/courses.ts';

export default Vue.extend({
  components: {
    CourseBatchCardSmall,
    CourseDescriptionSection,
    CourseResourceSection,
    CourseReview,
    CourseBanner,
  },
  data() {
    return {
      course: null,
      currentBatchAttempt: null
    }
  },
  computed: {
    ...mapState('session', ['user'])
  },
  async asyncData({ params, store }) {
    const user = store.state.session.user;
    const course = CourseRepository.fetchById(Number(params.id));
    const currentBatchAttempt = user ? CourseRepository.fetchCurrentBatchAttempt(Number(params.id)) : null;

    return hash({
      course,
      currentBatchAttempt
    })
  },
})
</script>
