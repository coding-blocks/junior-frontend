<template>
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
              <div class="white heading-2 bold">
                Introduction to Python
              </div>
            </div>
          </div>
          <div class="mt-50">
            <div class="heading-5 bold">
              Lecture 6: Python | Classes &amp; Objects
            </div>
            <div class="mt-30">
              <div class="row no-gutters align-items-center">
                <div
                  class="br-50 py-15 px-20 font-5 bold mr-20 mb-20"
                  style="background: rgba(255, 255, 255, 0.2)"
                >
                  Thursday, 12th September
                </div>
                <div
                  class="br-50 py-15 px-20 font-5 bold mr-20 mb-20"
                  style="background: rgba(255, 255, 255, 0.2)"
                >
                  8:00 PM Onwards
                </div>
              </div>
            </div>
            <div class="mt-30">
              <div class="row no-gutters align-items-center">
                <button class="button-primary mr-20 mb-20">
                  Set Reminder
                </button>
                <button class="button-primary button-primary--white mb-20 text-orange">
                  Start Learning
                </button>
              </div>
            </div>
            <div class="font-4">
              Note: Class will unlock on 12 September 2020, 7:00PM
            </div>
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
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    },
    batchAttempt: {
      type: Object,
      required: true
    }
  }  
})
</script>
