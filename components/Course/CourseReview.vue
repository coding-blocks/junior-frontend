<template>
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
