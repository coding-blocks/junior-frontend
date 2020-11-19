<template>
  <div class="row">
    <div class="col-md-6">
      <div class="heading-5 bold">Course Description</div>
      <div class="heading-6 my-40 text-grey">
        {{course.description}}
      </div>
      <button class="button-primary">View Complete Syllabus</button>
    </div>
    <div class="col-md-6 mt-md-none mt-50">
      <div class="heading-5 bold mb-40">Course Description</div>
      <div class="row mb-25">
        <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
          <div class="card all-center">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/learning_hours.svg"
              style="height: 50px"
            />
          </div>
          <div class="mt-20 font-5 bold t-align-c">Feature 1</div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
          <div class="card all-center">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/students_taught.svg"
              style="height: 50px"
            />
          </div>
          <div class="mt-20 font-5 bold t-align-c">Feature 1</div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
          <div class="card all-center">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/projects.svg"
              style="height: 50px"
            />
          </div>
          <div class="mt-20 font-5 bold t-align-c">Feature 1</div>
        </div>
        <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
          <div class="card all-center">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/certificates_issued.svg"
              style="height: 50px"
            />
          </div>
          <div class="mt-20 font-5 bold t-align-c">Feature 1</div>
        </div>
      </div>
      <div class="heading-5 bold mb-40">Capstone Project</div>
      <div class="card">
        <div
          class="row no-gutters align-items-center justify-content-between"
        >
          <div class="flex-1 d-sm-block d-none">
            <div class="heading-5 bold mb-10">Project Name</div>
            <div class="text-grey-light-1 font-5">
              Description goes in this placeholder
            </div>
          </div>
          <div class="col-12 d-sm-none d-block mb-25">
            <div class="heading-5 bold mb-10">Project Name</div>
            <div class="text-grey-light-1 font-5">
              Description goes in this placeholder
            </div>
          </div>
          <button class="button-secondary button-secondary--light">
            View Live Demo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  }
})
</script>
