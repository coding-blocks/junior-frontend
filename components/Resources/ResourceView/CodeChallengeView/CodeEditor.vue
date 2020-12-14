<template>
  <div>
    <div class="card p-none overflow-hidden">
      <div class="row px-5 py-4 justify-content-between bg-grey-light-2 w-100 m-0">
        <div class="col-6 p-0">
          <span class="font-sm extra-bold">{...} Code Editor</span>
        </div>
        <div>
          <select class="dropdown d-inline-block" v-model="selectedLanguageCode">
            <option 
              v-for="spec in languageSpecs"
              :key="spec.code"
              :value="spec.code"
            >
              {{spec.name}}
            </option>
          </select>
        </div>
      </div>
      <div class="flex-1 w-100">
        <MonacoEditor 
          class="monaco-editor"
          :value="code"
          :language="language"
          @onChange="onChange"
        />
      </div>
      <div class="pt-4 pb-4 px-xl-5 px-4 w-100 bg-med-grey">
        <div class="row justify-content-between align-items-center">
          <a class="col-lg-4 col-12 white extra-bold pr-0 pointer">
            <i class="fas fa-angle-up mr-3"></i>
            <span>Provide Custom Input</span>
          </a>
          <div class="d-none d-lg-block">
            <button 
              class="button-dashed button-orange ml-3 mr-1"
              @click="onRunTask.run()"
              :disabled="isRunSubmitDisabled"
            >
              {{onRunTask.isActive ? 'Running' : 'Compile and Test'}}
            </button>
            <button 
              class="button-solid button-orange mr-3 ml-1"
              @click="onSubmitTask.run()"
              :disabled="isRunSubmitDisabled"
            >
              {{onSubmitTask.isActive ? 'Submitting' : 'Submit Code'}}
            </button>
          </div>
        </div>
        <textarea cols="30" rows="5" class="mx-auto my-4 white w-100 bg-dark-grey" v-model="customInput"></textarea>
        <div class="d-flex my-1 justify-content-center d-lg-none d-block">
          <button 
            class="button-dashed button-orange ml-3 mr-1"
            @click="onRunTask.run()"
            :disabled="isRunSubmitDisabled"
          > 
            {{onRunTask.isActive ? 'Running' : 'Compile and Test'}}
          </button>
          <button 
            class="button-solid button-orange mr-3 ml-1"
            @click="onSubmitTask.run()"
            :disabled="isRunSubmitDisabled"
          >
            {{onSubmitTask.isActive ? 'Submitting' : 'Submit Code'}}
          </button>
        </div>
      </div>
    </div>
    <SubmissionResult 
      class="mt-5"
      v-if="submission"
      :submission="submission"
    />
  </div>
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import { Base64 } from 'js-base64';
import MonacoEditor from '@/components/Base/MonacoEditor.vue';
import SubmissionResult from '@/components/Resources/ResourceView/CodeChallengeView/SubmissionResult/index.vue';
import HackerblocksRepository from '@/repositories/hackerblocks';

export default Vue.extend({
  props: {
    problem: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.setCodeStubs();
    this.customInput = this.problem.problem.details['sample-input'] || '';
  },
  data() {
    return {
      languageSpecs: [
        { name: "C++", code: "cpp", mode: "cpp", source: "" },
        { name: "C", code: "c", mode: "c", source: "" },
        { name: "Python 2.7", code: "py2", mode: "python", source: "" },
        { name: "Python 3", code: "py3", mode: "python", source: "" },
        { name: "Node", code: "js", mode: "javascript", source: "" },
        { name: "Java 8", code: "java", mode: "java", source: "" },
        { name: "C#", code: "csharp", mode: "csharp", source: "" }
      ],
      selectedLanguageCode: 'cpp',
      options: {},
      customInput: '',
      submission: null
    }
  },
  computed: {
    ...mapState('current-batch-attempt', ['currentBatchAttempt']),
    contestId() {
      return this.currentBatchAttempt.batch.hbContestId;
    },
    contentId() {
      return this.problem.id;
    },
    currentLanguageSpec() {
      return this.languageSpecs.find(_ => _.code === this.selectedLanguageCode);
    },
    code() {
      return this.currentLanguageSpec.source;
    },
    language() {
      return this.currentLanguageSpec.mode;
    },
    languageCode() {
      return this.currentLanguageSpec.code;
    },
    isRunSubmitDisabled() {
      return this.onSubmitTask.isActive || this.onRunTask.isActive;
    }
  },
  components: {
    MonacoEditor,
    SubmissionResult
  },
  tasks(t, { timeout }) {
    return {
      onSubmitTask: t(async function() {
        const { submissionId } = await HackerblocksRepository.submitContent({
          contestId: this.contestId,
          contentId: this.contentId,
          source: Base64.encode(this.code),
          language: this.languageCode
        })
        
        let tries = 20;
        while(tries--) {
          await timeout(2000);
          this.submission = await HackerblocksRepository.fetchSubmission(submissionId);
          if (this.submission['judge-result']) return this.submission;
        }
      }).flow('drop'),
      onRunTask: t(async function() {
        const { submissionId } = await HackerblocksRepository.runContent({
          contentId: this.problem.id,
          source: Base64.encode(this.code),
          language: this.languageCode,
          input: Base64.encode(this.customInput)
        })

        let tries = 20;
        while(tries--) {
          await timeout(2000);
          this.submission = await HackerblocksRepository.fetchSubmission(submissionId);
          if (this.submission['judge-result']) return this.submission;
        }
      })
    }
  },
  methods: {
    onChange(value) {
      this.currentLanguageSpec.source = value;
    },
    setCodeStubs() {
      this.problem.problem['solution-stubs'].forEach(stub => {
        const spec = this.languageSpecs.find(_ => _.code === stub.language);
        spec.source = stub.body
      })
    }
  }
})
</script>
<style scoped>
  .monaco-editor {
    height: 500px;
  }
</style>
