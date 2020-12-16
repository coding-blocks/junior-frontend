<template>
  <div class="card bg-gradient-purple white mb-50">
    <div class="row no-gutters align-items-center mb-40">
      <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python_white.svg" style="width: 55px;">
      <div class="flex-1 pl-25">
        <div class="font-4">RECOMMENDED FOR 4-6</div>
        <div class="heading-4 bold mt-10">{{course.title}}</div>
      </div>
    </div>
    <div class="row no-gutters align-items-center justify-content-between">
      <div class="col-md-8">
        <div class="row align-items-center">
          <div class="col-7 border-right b-white">
            <div class="row no-gutters align-items-center">
              <div class="s-50x50">
                <svg class="radial-progress yellow" data-progress="75" x="0px" y="0px" viewBox="0 0 80 80">
                  <path class="track" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                  <path class="fill" d="M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0" />
                </svg>
              </div>
              <div class="flex-1 pl-sm-20 pl-10">
                <div>RESOURCES</div>
                <div class="bold mt-10">75% content covered</div>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div>REGULAR</div>
            <div class="bold mt-10">4/10 lectures completed</div>
          </div>
        </div>
      </div>
      <nuxt-link 
        class="button-primary mt-md-none mt-30"
        :to="`/courses/${course.slug}`"
      >
        Go to classroom
      </nuxt-link>
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
