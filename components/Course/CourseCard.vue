<template>
  <div 
    class="card white"
    :class="course.backgroundTheme"
  >
    <div class="row align-items-center">
      <div class="col-xl-7">
        <div class="row no-gutters align-items-center mb-30">
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python_white.svg"
            style="width: 45px"
          />
          <div class="flex-1 pl-25">
            <div>RECOMMENDED FOR {{course.classTag}}</div>
            <div class="heading-5 bold">{{course.title}}</div>
          </div>
        </div>
        <div class="mb-30">
          {{course.subTitle}}
        </div>
        <ul class="divided-list">
          <li class="px-25">
            <div class="heading-6 bold">{{course.courseProjects.length}}</div>
            <div class="font-3 mt-10">Projects</div>
          </li>
          <li class="px-25">
            <div class="heading-6 bold">40+</div>
            <div class="font-3 mt-10">PDF Notes</div>
          </li>
          <li class="px-25">
            <div class="heading-6 bold">25+</div>
            <div class="font-3 mt-10">Quizzes</div>
          </li>
        </ul>
      </div>
      <div class="col-xl-5 mt-xl-none mt-40">
        <div class="floating-video-pane" style="height: 170px"></div>
      </div>
    </div>
    <div class="my-40 divider-h"></div>
    <div class="row no-gutters align-items-center justify-content-between">
      <div
        class="col-xl-7 col-lg-6 col-md-12 col-sm-8 mb-lg-none mb-md-25 mb-sm-none mb-25"
      >
        <div class="row no-gutters align-items-center">
          <div class="round s-30x30 border b-white">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python_white.svg"
            />
          </div>
          <div class="flex-1 pl-15">
            <div class="font-4 bold">John Doe</div>
            <div>...Great course. Excellent content.</div>
          </div>
        </div>
      </div>
      <nuxt-link 
        class="button-primary button-primary--white"
        :to="`/courses/${course.slug}`"
      >
        View Course
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
