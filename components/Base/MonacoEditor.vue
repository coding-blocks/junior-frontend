<template>
  <div id="editor" class="monaco-editor"></div>  
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    }
  },
  mounted() {    
    this.initEditor();
  },
  beforeDestroy() {
    this.editor && this.editor.dispose();
    this.editor = null;
  },
  data(): {
    editor: any;
    monaco: any;
  } {
    return {
      editor: null,
      monaco: null
    }
  },
  watch: {
    value() {
      this.editor && this.value !== this.getValue() && this.setValue(this.value);
    },
    language() {
      this.editor && this.monaco.editor.setModelLanguage(this.editor.getModel(), this.language);
    }
  },
  methods: {
    setValue(value) {
      debugger
      this.editor && this.setValue(value);
    },
    getValue() {
      return this.editor && this.editor!.getValue();
    },
    initEditor() {
      /*
        https://medium.com/@michaellperry/gatsby-pages-with-client-only-script-85a7c5664a27

        TL;DR
        During SSR when we import monaco editor it expects certain browser level variables
        delaying the import to the client side fixes the issue
      */
      const monaco = require('monaco-editor');
      const editor = monaco.editor.create(document.getElementById('editor')!, {
        value: this.value,
        theme: 'vs-dark',
        language: 'javascript'
      });
      this.editor = editor;
      this.monaco = monaco
      editor.onDidChangeModelContent(event => {
        const value = this.getValue();
        this.$emit('onChange', value);
      });
    }
  }
})
</script>
