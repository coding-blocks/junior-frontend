<template>
  <div class="card mb-50">
    <div class="heading-6 bold mb-30 pb-30 border-bottom">
      {{troublemakerQuiz.title}}
    </div>

    <VAsync :task="fetchQuestionTask" >
      <template v-slot="{ value: question }">
        <QuestionContainer 
          :troublemakerQuestion="question"
          :questionSubmission="currentQuestionSubmission"
          @onChoiceSelect="onChoiceSelect"
        />
      </template>
    </VAsync>

    <div class="row no-gutters justify-content-between align-items-center mt-40">
      <div class="col-sm-8 col-6">
        <div class="med-grey font-4">{{questionRemaining}} Questions Remaining</div>
        <div class="mt-20">
          <progress 
            :value="currentQuestionIndex" 
            :max="totalQuestions"
          ></progress>
        </div>
      </div>

      <button 
        class="button-primary"
        @click="submitQuiz()"
        v-if="lastQuestion"
      >
        Submit
      </button>
      <button 
        class="button-primary"
        @click="nextQuestion()"
        v-else
      >
        Next Question
      </button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VAsync from '@/components/Base/VAsync';
import QuestionContainer from '@/components/Resources/ResourceView/QuizView/QuestionContainer.vue';
import HackerblocksRepository from '@/repositories/hackerblocks';

export default Vue.extend({
  props: {
    troublemakerQuiz: {
      type: Object,
      required: true
    },
    contentAttempt: {
      type: Object,
      required: true
    }
  },
  components: {
    VAsync,
    QuestionContainer
  },
  computed: {
    lastQuestion() {
      return this.currentQuestionIndex === (this.totalQuestions-1)
    },
    totalQuestions() {
      return this.troublemakerQuiz.questions.length;
    },
    questionRemaining() {
      return this.totalQuestions - this.currentQuestionIndex
    },
    currentQuestion() {
      return this.troublemakerQuiz.questions[this.currentQuestionIndex];
    },
    currentQuestionSubmission() {
      const questionSubmission = this.contentAttempt['quiz-question-submissions'].find(_ => _['question-id'] === this.currentQuestion.id)

      if (questionSubmission) {
        return questionSubmission
      }

      const newQuestionSubmission = {
        'question-id': this.currentQuestion.id,
        'answer-ids': []
      }

      return newQuestionSubmission
    },
  },
  data() {
    return {
      currentQuestionIndex: 0
    }
  },
  tasks(t) {
    return {
      fetchQuestionTask: t(async () => {
        const questionId = this.currentQuestion.id
        return HackerblocksRepository.fetchTroublemakerQuestion(questionId)
      }),
      saveQuestionAttempt: t(async (choice) => {
        const previousAnswer = this.currentQuestionSubmission['answer-ids'];
        try {
          this.currentQuestionSubmission['answer-ids'] = [choice.id];
          const quizQuestionSubmission = await HackerblocksRepository.updateQuizQuestionSubmission(this.currentQuestionSubmission, this.contentAttempt.id)
          if (!this.currentQuestionSubmission.id) {
            this.contentAttempt['quiz-question-submissions'].push(quizQuestionSubmission);
            return;
          }

          const index = this.contentAttempt['quiz-question-submissions'].indexOf(this.currentQuestionSubmission)
          this.contentAttempt['quiz-question-submissions'][index] = quizQuestionSubmission
        } catch (err) {
          this.currentQuestionSubmission['answer-ids'] = previousAnswer;
        }
      })
    }
  },
  methods: {
    onChoiceSelect(choice) {
      this.saveQuestionAttempt.run(choice);
    },
    nextQuestion() {
      if (this.currentQuestionIndex < (this.totalQuestions - 1)) {
        this.currentQuestionIndex += 1
        this.fetchQuestionTask.run();
      }
    },
    submitQuiz() {
      this.$emit('onSubmit')
    }
  }
})
</script>
