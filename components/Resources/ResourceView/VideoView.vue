<template>
  <div class="row">
    <div class="col-md-6 col-lg-8" style="height: calc(100vh - 150px)">
      <div class="card h-100 p-none overflow-hidden">
        <div class="flex-col h-100">
          <div
            class="flex-1 w-100 image-flex"
          >
            <iframe 
              class="w-100 h-100"
              :src="`https://www.youtube.com/embed/${video.video_id}`" 
              frameborder="0" 
              allowfullscreen></iframe> 
          </div>
          <div class="p-25 w-100">
            <div class="row no-gutters align-items-center">
              <div class="flex-1 pr-20">
                <div class="heading-5 bold">
                  {{resource.title}}
                </div>
              </div>
              <div class="round s-70x70">
                <img
                  src="https://minio.codingblocks.com/img/pulkit-min.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card video-card">
        <div class="d-flex align-items-center">
          <div>
            <img 
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/play-red.svg" 
              style="height: 45px;"
            >
          </div>
          <div class="ml-3">
            <div class="font-4">Video Lecture</div>
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
    video() {
      return this.resource.video;
    }
  }
})
</script>
