<template>
  <div
    class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20 br-20 position-relative white bg-gradient-purple"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="row no-gutters align-items-center">
            <img
              :src="course.logo"
              style="width: 55px;"
            />
            <div class="flex-1 pl-30">
              <div class="font-5">RECOMMENDED FOR {{course.classTag}}</div>
              <div class="mt-10 white heading-2 bold">
                {{course.title}}
              </div>
            </div>
          </div>
          <div class="font-5 mt-40">
            {{course.subtitle}}
          </div>
          <div class="heading-6 bold mt-40">What will you learn?</div>
          <div class="mt-40 row no-gutters align-items-center">
            <div 
              class="pill-tag mr-20 mb-20"
              v-for="tag in course.tags"
              :key="tag.id"
            >
              {{tag.title}}
            </div>
          </div>
          <div class="mt-30 heading-6 bold">Projects you will build</div>
          <div class="mt-30 row c-card-carousel">
            <div 
              class="col-xl-3 col-lg-4 col-md-3 col-6"
              v-for="project in course.courseProjects"
              :key="project.id"
            >
              <img 
                class="br-20" 
                style="height: 150px"
                :src="project.thumbnail"
              />
              <div class="white bold t-align-c">
                {{project.title}}
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
            <nuxt-link
              :to="`/courses/${course.slug}`"
              class="button-primary w-75 position-absolute justify-content-center"
              style="left: 12.5%; bottom: -20px"
            >
              Start Learning
            </nuxt-link>
          </div>
          <div class="mt-70 mx-auto" style="width: fit-content">
            <div class="heading-5 bold">What you will get!</div>
            <ul
              class="divided-list mt-30 d-xl-flex d-lg-none d-sm-flex d-none"
            >
              <li class="px-25">
                <div class="row no-gutters align-items-center">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/projects_folder.svg"
                    class="mr-20"
                  />
                  <div class="flex-1">
                    <div class="heading-5 bold">{{course.courseProjects.length}}</div>
                    <div class="font-4 mt-10">Projects</div>
                  </div>
                </div>
              </li>
              <li class="px-25">
                <div class="row no-gutters align-items-center">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/pdf_notes.svg"
                    class="mr-20"
                  />
                  <div class="flex-1">
                    <div class="heading-5 bold">{{0}}</div>
                    <div class="font-4 mt-10">PDF Notes</div>
                  </div>
                </div>
              </li>
              <li class="px-25">
                <div class="row no-gutters align-items-center">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/stats_quizzes.svg"
                    class="mr-20"
                  />
                  <div class="flex-1">
                    <div class="heading-5 bold">{{0}}</div>
                    <div class="font-4 mt-10">Quizzes</div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="d-xl-none d-lg-block d-sm-none d-block mt-30">
              <div class="row no-gutters align-items-center">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/projects_folder.svg"
                  class="mr-20"
                />
                <div class="flex-1">
                  <div class="heading-5 bold">{{course.courseProjects.length}}</div>
                  <div class="font-4 mt-10">Projects</div>
                </div>
              </div>
              <div class="divider-h my-20"></div>
              <div class="row no-gutters align-items-center">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/pdf_notes.svg"
                  class="mr-20"
                />
                <div class="flex-1">
                  <div class="heading-5 bold">{{0}}</div>
                  <div class="font-4 mt-10">PDF Notes</div>
                </div>
              </div>
              <div class="divider-h my-20"></div>
              <div class="row no-gutters align-items-center">
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/stats_quizzes.svg"
                  class="mr-20"
                />
                <div class="flex-1">
                  <div class="heading-5 bold">{{0}}</div>
                  <div class="font-4 mt-10">Quizzes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  }  
})
</script>
