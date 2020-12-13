<template>
  <div class="card mb-50">
    <div class="row no-gutters align-items-center justify-content-between">
      <div class="col-sm-6 mb-sm-none mb-30">
        <div class="heading-6 bold mb-20">{{troublemakerQuiz.title}}</div>
        <div class="v-align-ma">
          <a 
            href="#" 
            class="font-4 bold"
            @click.prevent="onBack()"
          >
            Go Back
          </a>
        </div>
      </div>
      <div class="flex-1 t-align-r">
        <VAsync :task="pollSubmissionTask">
          <template v-slot:loading>
            <div class="bold mb-10">Calculating</div>
          </template>
          <template v-slot="{value: submission}">
            <div 
              class="bold mb-10" 
            >
              <span v-if="pollSubmissionTask.lastStarted.isRejected || !submission">
                Error
              </span>
              <span style="font-size: 60px;" v-else>
                {{submission.score}}/{{maxMarks}}
              </span>
            </div>
          </template>
        </VAsync>
        <div class="font-4 text-grey-light-1">Your Score</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

import VAsync from '@/components/Base/VAsync.vue';
import HackerblocksRepository from '@/repositories/hackerblocks';

export default Vue.extend({
  props: {
    troublemakerQuiz: {
      type: Object,
      required: true
    },
    submissionId: {
      type: Number,
      required: true
    }
  },
  components: {
    VAsync
  },
  computed: {
    maxMarks() {
      return this.troublemakerQuiz['max-marks']
    }
  },
  tasks(t, { timeout }) {
    return {
      pollSubmissionTask: t(async function() {
        let tries = 20;
        while(tries--) {
          await timeout(500);
          const submission = await HackerblocksRepository.fetchSubmission(this.submissionId);
          if (submission['judge-result']) return submission
        }
        return null
      })
    }
  },
  methods: {
    onBack() {
      this.$emit('onBack')
    }
  }
})
</script>
