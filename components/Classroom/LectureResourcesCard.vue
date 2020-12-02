<template>
  <div class="card h-100 p-none">
    <div class="flex-col h-100">
      <div class="position-sticky tl p-30 w-100">
        <div class="tab-nav-underline">
          <div class="tab active">Resources</div>
          <div class="tab">Homework</div>
        </div>
      </div>
      <div class="overflow-y-auto px-30 pb-30 w-100">
        <div
          class="br-10 p-20 pointer mb-25"
          style="background-color: rgba(85, 194, 92, 0.1)"
        >
          <div class="row no-gutters align-items-center">
            <div class="mr-20">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/calender-green.svg"
                style="height: 50px"
              />
            </div>
            <div class="flex-1">
              <div class="font-5 bold">Code Problem</div>
              <div class="text-grey">Problem name goes here</div>
            </div>
          </div>
        </div>
        <div
          class="br-10 p-20 pointer mb-25"
          style="background-color: #e9f0fc"
        >
          <div class="row no-gutters align-items-center">
            <div class="mr-20">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/stats-blue.svg"
                style="height: 50px"
              />
            </div>
            <div class="flex-1">
              <div class="font-5 bold">Quiz</div>
              <div class="text-grey">Problem name goes here</div>
            </div>
          </div>
        </div>
        <div
          class="br-10 p-20 pointer mb-25"
          style="background-color: #f9e9f0"
        >
          <div class="row no-gutters align-items-center">
            <div class="mr-20">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/play-red.svg"
                style="height: 50px"
              />
            </div>
            <div class="flex-1">
              <div class="font-5 bold">Video Lecture</div>
              <div class="text-grey">Problem name goes here</div>
            </div>
          </div>
        </div>
        <div
          class="br-10 p-20 w-100 pointer"
          style="background-color: #e9f0fc"
        >
          <div class="row no-gutters align-items-center">
            <div class="mr-20">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/stats-blue.svg"
                style="height: 50px"
              />
            </div>
            <div class="flex-1">
              <div class="font-5 bold">Quiz</div>
              <div class="text-grey">Problem name goes here</div>
            </div>
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
    lecture: {
      type: Object,
      required: true
    }
  }  
})
</script>
