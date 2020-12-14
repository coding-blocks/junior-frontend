<template>
  <div class="card p-0 overflow-hidden">
    <SubmissionStatus 
      v-if="isRunning"
    />
    <SubmissionError 
      v-else-if="isErrored"
      :output="errorPayload"
    />
    <SubmissionTestcases 
      v-else-if="isSubmission"
      :testcases="testcasesPayload"
    />
    <SubmissionSuccess 
      v-else
      :output="output"
    />
  </div>
</template>
<script>
import Vue from 'vue';
import SubmissionStatus from '@/components/Resources/ResourceView/CodeChallengeView/SubmissionResult/Status.vue';
import SubmissionError from '@/components/Resources/ResourceView/CodeChallengeView/SubmissionResult/Error.vue';
import SubmissionTestcases from '@/components/Resources/ResourceView/CodeChallengeView/SubmissionResult/Testcases.vue';
import SubmissionSuccess from '@/components/Resources/ResourceView/CodeChallengeView/SubmissionResult/Success.vue';

export default Vue.extend({
  props: {
    submission: {
      type: Object,
      required: true
    }
  },
  components: {
    SubmissionStatus,
    SubmissionError,
    SubmissionTestcases,
    SubmissionSuccess
  },
  computed: {
    judgeResult() {
      return this.submission['judge-result'];
    },
    isRunning() {
      return !this.judgeResult;
    },
    isErrored() {
      return !!this.judgeResult?.stderr;
    },
    isSubmission() {    
      return !!(this.judgeResult?.testcases);
    },
    errorPayload() {    
      if (this.isErrored) { 
        return window.atob(this.judgeResult?.stderr);
      }
    },
    output() {
      if (!this.isSubmission) {
        return window.atob(this.judgeResult?.stdout);
      }
    },
    testcasesPayload() {
      if (this.isSubmission) {
        return this.judgeResult?.testcases;
      }
    }
  }
})
</script>