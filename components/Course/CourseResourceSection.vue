<template>
  <div>
    <div class="row">
      <div class="col-md-6 mb-xl-100 mb-lg-75 mb-md-50">
        <div class="heading-5 bold">Resources</div>
        <div class="heading-6 my-40 text-grey">
          We started Coding Blocks in 2014 but handled a bigger at hand,
          skillifying and guiding College students and working.
        </div>
        <nuxt-link 
          :to="`/courses/${course.id}/resources`"
          class="button-primary"
        >
          Explore All Resources
        </nuxt-link>
      </div>
      <div class="col-md-6 mt-md-none mt-50 mb-xl-75 mb-lg-50 mb-25">
        <div class="row align-items-center">
          <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
            <div class="card all-center">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/folder-yellow.svg"
                style="height: 50px"
              />
            </div>
            <div class="mt-20 t-align-c">
              <div class="heading-2 bold">{{documentCount}}</div>
              <div class="mt-10 font-5">Notes</div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
            <div class="card all-center">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/calender-green.svg"
                style="height: 50px"
              />
            </div>
            <div class="mt-20 t-align-c">
              <div class="heading-2 bold">{{hbCount}}</div>
              <div class="mt-10 font-5">Assignments</div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
            <div class="card all-center">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/stats-blue.svg"
                style="height: 50px"
              />
            </div>
            <div class="mt-20 t-align-c">
              <div class="heading-2 bold">{{quizCount}}</div>
              <div class="mt-10 font-5">Quizzes</div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
            <div class="card all-center">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/play-red.svg"
                style="height: 50px"
              />
            </div>
            <div class="mt-20 t-align-c">
              <div class="heading-2 bold">{{videoCount}}</div>
              <div class="mt-10 font-5">Lectures</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="heading-5 bold mb-40">Projects you will build</div>
    <div class="row c-card-carousel mb-xl-100 mb-lg-75 mb-50">
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div class="card bg-grey-light-1" style="height: 200px"></div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div class="card bg-grey-light-1" style="height: 200px"></div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div class="card bg-grey-light-1" style="height: 200px"></div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div class="card bg-grey-light-1" style="height: 200px"></div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div class="card bg-grey-light-1" style="height: 200px"></div>
      </div>
    </div>
    <div class="heading-5 bold mb-40">Assignments, Quizzes and more...</div>
    <div class="row c-card-carousel">
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div
          class="card bg-grey-light-1 position-relative"
          style="height: 200px"
        >
          <div class="position-absolute w-100 h-100 z-pos all-center tl">
            <span
              class="py-10 px-15 br-50 heading-6 bold white bg-gradient-green-light"
            >
              Assignment
            </span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div
          class="card bg-grey-light-1 position-relative"
          style="height: 200px"
        >
          <div class="position-absolute w-100 h-100 z-pos all-center tl">
            <span
              class="py-10 px-15 br-50 heading-6 bold white bg-gradient-pink-light"
            >
              Video
            </span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div
          class="card bg-grey-light-1 position-relative"
          style="height: 200px"
        >
          <div class="position-absolute w-100 h-100 z-pos all-center tl">
            <span
              class="py-10 px-15 br-50 heading-6 bold white bg-gradient-green-light"
            >
              Assignment
            </span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div
          class="card bg-grey-light-1 position-relative"
          style="height: 200px"
        >
          <div class="position-absolute w-100 h-100 z-pos all-center tl">
            <span
              class="py-10 px-15 br-50 heading-6 bold white bg-gradient-blue-light"
            >
              Quiz
            </span>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-sm-5 col-8">
        <div
          class="card bg-grey-light-1 position-relative"
          style="height: 200px"
        >
          <div class="position-absolute w-100 h-100 z-pos all-center tl">
            <span
              class="py-10 px-15 br-50 heading-6 bold white bg-gradient-pink-light"
            >
              Video
            </span>
          </div>
        </div>
      </div>
    </div>  
  </div>  
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    videoCount() {
      return this.course?.meta?.resourceCount.videoCount || 0;
    },
    documentCount() {
      return this.course?.meta?.resourceCount.documentCount || 0;
    },
    hbCount() {
      return this.course?.meta?.resourceCount.hbCount || 0;
    },
    quizCount() {
      return this.course?.meta?.resourceCount.quizCount || 0;
    }
  }
})
</script>
