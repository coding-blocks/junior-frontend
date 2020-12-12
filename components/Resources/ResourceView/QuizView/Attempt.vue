<template>
  <div class="card mb-50">
    <div class="heading-6 bold mb-30 pb-30 border-bottom">
      {{troublemakerQuiz.title}}
    </div>

    <VAsync :task="fetchQuestionTask" >
      <template v-slot="{ value: question }">
        <QuestionContainer 
          :troublemakerQuestion="question"
        />
      </template>
    </VAsync>

    <div class="row no-gutters justify-content-between align-items-center mt-40">
      <div class="col-sm-8 col-6">
        <div class="med-grey font-4">8 Questions Remaining</div>
        <div class="mt-20">
          <progress value="40" max="100"></progress>
        </div>
      </div>
      <button class="button-primary">Next Question</button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VAsync from '@/components/base/VAsync';
import QuestionContainer from '@/components/Resources/ResourceView/QuizView/QuestionContainer.vue';
import HackerblocksRepository from '@/repositories/hackerblocks';

export default Vue.extend({
  props: {
    troublemakerQuiz: {
      type: Object,
      required: true
    }
  },
  components: {
    VAsync,
    QuestionContainer
  },
  data() {
    return {
      currentQuestionId: 0
    }
  },
  tasks(t) {
    return {
      fetchQuestionTask: t(async () => {
        const questionId = this.troublemakerQuiz.questions[this.currentQuestionId].id
        return HackerblocksRepository.fetchTroublemakerQuestion(questionId)
      })
    }
  }
})
</script>
