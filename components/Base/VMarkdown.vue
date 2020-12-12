<template>
  <div class="markdown-body" v-html="html"></div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'VMarkdown',
  props: ['markdown'],
  computed: {
    html() {
      return marked(this.markdown)
    }
  }
}
</script>

<style>
.markdown-body table {
  padding: 0;
  display: block;
  overflow-x: auto;
}
.markdown-body table tr {
  border-top: 1px solid #cccccc;
  background-color: white;
  margin: 0;
  padding: 0;
}
.markdown-body table tr:nth-child(2n) {
  background-color: #f8f8f8;
}
.markdown-body table tr th {
  font-weight: bold;
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}
.markdown-body table tr td {
  border: 1px solid #cccccc;
  text-align: left;
  margin: 0;
  padding: 6px 13px;
}
.markdown-body table tr th :first-child,
.markdown-body table tr td :first-child {
  margin-top: 0;
}
.markdown-body table tr th :last-child,
.markdown-body table tr td :last-child {
  margin-bottom: 0;
}
</style>
