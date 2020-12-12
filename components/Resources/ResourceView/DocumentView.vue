<template>
  <div class="row">
    <div class="col-md-6 col-lg-8">
      <div class="card mb-50">
        <div class="row no-gutters align-items-center">
          <div class="flex-1">
            <div class="heading-6 bold">{{resource.title}}</div>
          </div>
          <a
            :href="document.pdf_link"
            target="_blank" 
            class="button-primary">
            Download PDF
          </a>
        </div>
        <div class="mt-30 font-4">
          <iframe 
            :src="`https://docs.google.com/gview?url=${document.pdf_link}&embedded=true`"
            style="width:100%; min-height: 500px" 
            frameborder="0">
          </iframe>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card notes-card">
        <div class="d-flex align-items-center">
          <div>
            <img 
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/folder-yellow.svg" 
              style="height: 45px;"
            >
          </div>
          <div class="ml-3">
            <div class="font-4">PDF Note</div>
            <div class="font-5 bold">{{resource.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    }
  },
  computed: {
    document() {
      return this.resource.document
    }
  }
})
</script>
