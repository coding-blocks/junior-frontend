<template>
  <div>
    <VAsync :task="fetchSubmissionsTask">
      <template v-slot="{ value: submissions }">
        <div v-if="submissions.length">
          <h4 class="mb-5 pt-4">My Submissions</h4>
          <table class="w-100">
            <thead class="font-sm extra-bold b-bottom">
              <td class="pb-2">Result</td>
              <td class="pb-2">Score</td>
              <td class="pb-2">Time</td>
              <td class="pb-2">Language</td>
              <td class="pb-2"></td>
            </thead>
            <tbody class="bold">
              <SubmissionRow 
                v-for="submission in submissions"
                :key="submission.id"
                :submission="submission"
              />
            </tbody>
          </table>
        </div>
        <div class="t-align-c" v-else>
          <h4>My Submissions</h4>
          <p>
            You haven't made a submission to this problem yet
          </p>
        </div>
      </template>
    </VAsync>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import HackerblocksRepository from '@/repositories/hackerblocks';
import VAsync from '@/components/Base/VAsync';
import SubmissionRow from '@/components/Resources/ResourceView/CodeChallengeView/SubmissionRow.vue';

export default Vue.extend({
  props: {
    problem: {
      type: Object,
      required: true
    }
  },
  components: {
    VAsync,
    SubmissionRow
  },
  computed: {
    ...mapState('current-batch-attempt', ['currentBatchAttempt'])
  },
  tasks(t) {
    return {
      fetchSubmissionsTask: t(async () => {
        return HackerblocksRepository.fetchSubmissions(this.currentBatchAttempt.batch.hbContestId, this.problem.id);
      })
    }
  }
})
</script>
