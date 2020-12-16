<template>
  <div
    class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20 br-20 position-relative white"
    :class="course.backgroundTheme"
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
              <div class="mt-10 white heading-2 bold">
                {{course.title}}
              </div>
            </div>
          </div>
          <div class="font-5 mt-40">
            {{course.subTitle}}
          </div>
          <div v-if="tags.length">
            <div class="heading-6 bold mt-40">What will you learn?</div>
            <div class="mt-40 row no-gutters align-items-center">
              <div 
                class="pill-tag mr-20 mb-20"
                v-for="tag in tags"
                :key="tag"
              >
                {{tag}}
              </div>
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

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  computed: {
    tags() {
      return this.course.tags.map(tag => tag.title);
    }
  }
})
</script>
