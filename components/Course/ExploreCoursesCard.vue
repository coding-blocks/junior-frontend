<template>
  <div class="card bg-grey-light-3">
    <div class="position-relative mb-40">
      <div
        class="row no-gutters justify-content-between position-relative pb-40"
      >
        <div class="flex-1">
          <div class="row no-gutters align-items-center">
            <div class="s-70x70 round">
              <img
                :src="user.photo"
              />
            </div>
            <div class="flex-1 heading-2 bold pl-30">Hi, {{user.name}}</div>
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/junior.svg"
            class="position-absolute br z-pos d-sm-block d-none"
            style="bottom: -40px"
          />
        </div>
      </div>
      <div
        class="pb-40 bg-grey-light-3 position-absolute bl w-100"
        style="border-top: 1px solid #d0d0d0; z-index: 2; bottom: -40px"
      ></div>
    </div>
    <div class="row no-gutters align-items-center">
      <div class="font-5 mr-30 my-10">Enroll in a course to get started</div>
      <nuxt-link to="/courses" class="button-primary">Enroll Now</nuxt-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    user: {
      type: Object,
      required: true
    }
  }
})
</script>