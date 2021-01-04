<template>
  <div class="w-100">
    <div v-if="fileLocation">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div>
          <a 
            :href="fileLocation"
            target="_blank"
            class="orange"
          >
            {{fileLocation}}
          </a>
        </div>
        <div>
          <div
            class="pointer"
            @click="resetFileAndFileLocation"
          >
            <fa :icon="faTimes" />
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="file">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div>
          {{file.name}}
          <TaskButton 
            :task="uploadFileTask"
            text="Upload"
            loadingText="Uploading"
          />
        </div>
        <div
          class="pointer"
          @click="resetFileAndFileLocation"
        >
          <fa :icon="faTimes" />
        </div>
      </div>
    </div>
    <div v-else>
      <input type="file" @change="onFileChange">
    </div>
  </div>  
</template>
<script>
import Vue from 'vue';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TaskButton from '@/components/Base/TaskButton.vue';
import { abstractField } from 'vue-form-generator'
import MinioRepository from '@/repositories/minio';

export default Vue.extend({
  mixins: [abstractField],
  computed: {
    faTimes() {
      return faTimes
    },
    fileLocation() {
      return this.value
    }
  },
  data() {
    return {
      file: null
    }
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.file = files[0];
    },
    resetFileAndFileLocation() {
      this.file = null;
      this.value = null;
    }
  },
  tasks(t) {
    return {
      uploadFileTask: t(async function () {
        const { url } = await MinioRepository.fetchPresignedUrl();
        await fetch(url, {
          method: 'PUT',
          body: this.file
        })
        const fileLocation = url.split('?')[0]
        this.value = fileLocation
      })
    }
  }
})
</script>
