<template>
  <div class="pt-50">
    <div
      class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20 br-20 position-relative white bg-gradient-purple"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="row no-gutters align-items-center">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python-white-big.svg"
              />
              <div class="flex-1 pl-30">
                <div class="font-5">RECOMMENDED FOR 7-9</div>
                <div class="mt-5 white heading-2 bold">
                  {{ course.title }}
                </div>
              </div>
            </div>
            <div class="font-5 mt-40">
              {{course.subTitle}}
            </div>
            <div class="heading-6 bold mt-40">What will you learn?</div>
            <div class="mt-40 row no-gutters align-items-center">
              <div class="pill-tag mr-20 mb-20">Introduction to Python</div>
              <div class="pill-tag mr-20 mb-20">Animations</div>
              <div class="pill-tag mr-20 mb-20">Desktop Games</div>
              <div class="pill-tag mr-20 mb-20">Introduction to AI</div>
              <div class="pill-tag mr-20 mb-20">Falana Dhimaka</div>
            </div>
          </div>
          <div class="col-lg-5 mt-lg-none mt-50">
            <div
              class="br-20 position-relative mb-20 mx-auto"
              style="max-width: 450px"
            >
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/varun-bhaiya-python.svg"
                class="br-20 w-100"
              />
              <button
                class="button-primary w-75 position-absolute justify-content-center"
                style="left: 12.5%; bottom: -20px"
              >
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

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

    <div
      class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20 br-20 white bg-gradient-blue-dark"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="heading-3 bold">Kids and parents love us!!</div>
            <div class="my-40">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
                class="mr-sm-10 mr-5"
              />
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
                class="mr-sm-10 mr-5"
              />
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
                class="mr-sm-10 mr-5"
              />
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
                class="mr-sm-10 mr-5"
              />
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
              />
            </div>
            <div class="font-5">
              My daughter is in Grade 2 and we started attending the Block
              programming classes. I am very satisfied with the way she is
              progressing. She has started making games on her own in SpriteLab.
              I would like to congratulate the Coding Blocks Jr team and wish
              you guys success.
            </div>
            <div class="mt-40 heading-6 bold">
              John Doe, Father of Johny Doe
            </div>
          </div>
        </div>
      </div>
    </div>

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
import Vue from 'vue'
import CourseBatchCardSmall from '@/components/Course/CourseBatchCardSmall.vue'
import CourseDescriptionSection from '@/components/Course/CourseDescriptionSection.vue'
import CourseResourceSection from '@/components/Course/CourseResourceSection.vue'
import CourseRepository from '@/repositories/courses.ts'

export default Vue.extend({
  components: {
    CourseBatchCardSmall,
    CourseDescriptionSection,
    CourseResourceSection,
  },
  data() {
    return {
      course: null,
    }
  },
  async asyncData({ params }) {
    const course = await CourseRepository.fetchById(Number(params.id))

    return {
      course,
    }
  },
})
</script>
