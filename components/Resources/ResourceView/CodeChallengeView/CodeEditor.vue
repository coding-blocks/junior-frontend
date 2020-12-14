<template>
  <div class="card p-none overflow-hidden">
    <div class="row px-5 py-4 justify-content-between bg-grey-light-2 w-100 m-0">
      <div class="col-6 p-0">
        <span class="font-sm extra-bold">{...} Code Editor</span>
      </div>
      <div>
        <select class="dropdown d-inline-block">
          <option value="">CPP</option>
          <option value="">Java</option>
          <option value="">Python</option>
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
          <button class="button-dashed button-orange ml-3 mr-1">
            Compile and Test
          </button>
          <button class="button-solid button-orange mr-3 ml-1">
            Submit Code
          </button>
        </div>
      </div>
      <textarea cols="30" rows="5" class="mx-auto my-4 white w-100 bg-dark-grey"></textarea>
      <div class="d-flex my-1 justify-content-center d-lg-none d-block">
        <button class="button-dashed button-orange ml-3 mr-1">
          Compile and Test
        </button>
        <button class="button-solid button-orange mr-3 ml-1">
          Submit Code
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import MonacoEditor from '@/components/Base/MonacoEditor.vue';

export default Vue.extend({
  components: {
    MonacoEditor
  },
  data() {
    return {
      code: 'console.log()',
      language: 'javascript',
      options: {}
    }
  },
  methods: {
    onChange(value) {
      this.code = value
    }
  }
})
</script>
<style scoped>
  .monaco-editor {
    height: 500px;
  }
</style>
