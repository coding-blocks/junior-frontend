<template>
  <div class="card mb-50">
    <div class="heading-6 bold mb-30">
      {{troublemakerQuiz.title}}
    </div>
    <div class="row mb-40">
      <div class="col-sm-4 mb-sm-none mb-20">
        <div class="font-5 bold mb-15 v-align-ma">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/clock-small.svg" class="mr-10">
          <span>Timed</span>
        </div>
        <div class="font-4 text-grey-light-1">
          The questions are timed, higher time will lead to higher leaderboard rank.
        </div>
      </div>
      <div class="col-sm-4 mb-sm-none mb-20">
        <div class="font-5 bold mb-15 v-align-ma">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/files-small.svg" class="mr-10">
          <span>Questions</span>
        </div>
        <div class="font-4 text-grey-light-1">
          There will be {{troublemakerQuiz.questions.length}} skill based MCQ questions.
        </div>
      </div>
      <div class="col-sm-4 mb-sm-none mb-20">
        <div class="font-5 bold mb-15 v-align-ma">
          <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/repeat-small.svg" class="mr-10">
          <span>Retake</span>
        </div>
        <div class="font-4 text-grey-light-1">
          Not happy with the results? Retake to improve your scores.
        </div>
      </div>
    </div>
    <button 
      class="button-primary"
      @click="onStart()"  
    >
      Start the assessment
    </button>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    troublemakerQuiz: {
      type: Object,
      required: true
    }
  },
  methods: {
    onStart() {
      this.$emit('start')
    }
  }
})
</script>
