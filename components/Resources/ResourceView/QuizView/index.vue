<template>
  <div class="row">
    <div class="col-md-6 col-lg-8" style="height: calc(100vh - 150px)">
      <VAsync 
        :task="fetchQuizTask"
      >
        <template v-slot="{ value: { troublemakerQuiz, contentAttempt } }">
          <div>
            <div v-if="state === 'detail'">
              <QuizDetail 
                :troublemakerQuiz="troublemakerQuiz"
                @start="onStart()"
              />
            </div>
            <div v-else-if="state === 'attempt'">
              <QuizAttempt
                :troublemakerQuiz="troublemakerQuiz"
                :contentAttempt="contentAttempt"
                @onSubmit="onSubmit()"
              />
            </div>
            <div v-else-if="state === 'result' && submissionId">
              <QuizResult 
                :troublemakerQuiz="troublemakerQuiz"
                :submissionId="submissionId"
                @onBack="onBack()"
              />
            </div>
          </div>
        </template>
      </VAsync>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card quiz-card">
        <div class="d-flex align-items-center">
          <div>
            <img 
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/stats-blue.svg" 
              style="height: 45px;"
            >
          </div>
          <div class="ml-3">
            <div class="font-4">Quiz</div>
            <div class="font-5 bold">{{resource.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import VAsync from '@/components/Base/VAsync';
import QuizDetail from '@/components/Resources/ResourceView/QuizView/Detail.vue';
import QuizAttempt from '@/components/Resources/ResourceView/QuizView/Attempt.vue';
import QuizResult from '@/components/Resources/ResourceView/QuizView/Result.vue';
import ResourceRepository from '@/repositories/resources';
import HackerblocksRepository from '@/repositories/hackerblocks';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    },
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    VAsync,
    QuizDetail,
    QuizAttempt,
    QuizResult
  },
  data() {
    return {
      state: 'detail',
      submissionId: null
    }
  },
  computed: {
    ...mapState('current-batch-attempt', ['currentBatchAttempt'])
  },
  tasks(t) {
    return {
      fetchQuizTask: t(async function() {
        this.state = 'detail'
        const payload = await ResourceRepository.fetchResourceTypePayload(this.resource.id, this.course.id)
        const troublemakerQuiz = await HackerblocksRepository.fetchTroublemakerQuiz(payload.quiz.id, this.course.id)

        const contentAttempt = await HackerblocksRepository.fetchContentAttempt(this.currentBatchAttempt.batch.hbContestId, payload.id)
        return {
          troublemakerQuiz,
          contentAttempt
        }
      }),
      submitQuizTask: t(async function() {
        const payload = await ResourceRepository.fetchResourceTypePayload(this.resource.id, this.course.id)
        const { submissionId } = await HackerblocksRepository.submitContent({ contestId: this.currentBatchAttempt.batch.hbContestId, contentId: payload.id })
        this.submissionId = submissionId
        this.state = 'result'
      })
    }
  },
  methods: {
    onStart() {
      this.state = 'attempt'
    },
    onSubmit() {
      this.submitQuizTask.run()
    },
    onBack() {
      this.state = 'detail'
    }
  }
})
</script>
