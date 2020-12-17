<template>
  <div class="card h-100 p-none overflow-hidden">
    <div class="flex-col h-100">
      <div
        class="flex-1 w-100 image-flex"
      >
        <YoutubeLive 
          v-if="lecture.type === 'youtube'"
          :youtubeLive="lecture.youtubeLive"
        />
        <ZoomMeeting 
          class="h-100"
          v-else-if="lecture.type === 'zoom'"
          :zoomMeeting="lecture.zoomMeeting"
        />
      </div>
      <div class="p-sm-40 p-25 w-100">
        <div class="row no-gutters align-items-center">
          <div class="flex-1 pr-20">
            <div class="heading-5 bold">
              {{lecture.title}}
            </div>
            <div class="font-5 mt-10 text-grey">
              MENTOR: <strong>VARUN KOHLI</strong>
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
</template>

<script lang="ts">
import Vue from 'vue'
import YoutubeLive from './YoutubeLive.vue';
import ZoomMeeting from './ZoomMeeting.vue';

export default Vue.extend({
  props: {
    lecture: {
      type: Object,
      required: true
    }
  },
  components: {
    YoutubeLive,
    ZoomMeeting,
  }
})
</script>

<style scoped>
.image-flex {
  max-height: calc(100vh - 300px);
  background-size: cover !important;
}
</style>
