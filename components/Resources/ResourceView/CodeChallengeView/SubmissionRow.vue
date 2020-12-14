<template>
  <tr>
    <td 
      class="pb-4 pt-4 font-sm"
      :class="resultParams.color"
    >
      <fa :icon="resultParams.icon" />
      <span>{{resultParams.message}}</span>
    </td>
    <td class="pb-4 pt-4">
      {{submission.score}}/100
    </td>
    <td class="pb-4 pt-4">{{submission.executionTime || '--'}}</td>
    <td class="pb-4 pt-4">{{submission.language}}</td>
    <td class="pb-4 pt-4 t-align-r">
      <span class="normal">
        {{submitAtHumanize}}
      </span> 
    </td>
  </tr>
</template>
<script>
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
  props: {
    submission: {
      type: Object,
      required: true
    }
  },
  computed: {
    submitAtHumanize() {
      return moment(this.submission['created-at']).fromNow();
    },
    resultParams() {
      switch(this.submission.explanation) {
        case 'Perfect': return {
          color: 'green',
          icon: 'faCheck',
          message: 'Accepted'
        }
        case 'WrongAnswer':
        case 'FailedTestcase': return {
          color: 'red',
          icon: 'faTimes',
          message: 'Wrong Answer'
        }
        case 'TimeLimitExceeded': return {
          color: 'orange',
          icon: 'faExclamation',
          message: 'TLE'
        }
        case 'CompilationError': return {
          color: 'orange',
          icon: 'faExclamation',
          message: 'Compilation Error'
        }
        case 'ContestOver': return {
          color: 'orange',
          icon: 'faExclamation',
          message: 'Contest Over'
        }
        case 'TestcaseUnlocked': return {
          color: 'orange',
          icon: 'faExclamation',
          message: 'Test Case Unlocked'
        }
        case 'EditorialUnlocked': return {
          color: 'orange',
          icon: 'faExclamation',
          message: 'Editorial Unlocked'
        }
        default: return {
          color: 'orange',
          icon: 'faExclamation',
          message: 'Submission Not Judged'
        }
      }
    }
  }
})
</script>