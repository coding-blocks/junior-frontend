<template>
  <div class="card" style="height: 750px">
    <div class="flex-col h-100">
      <div class="heading-6 bold w-100 mb-30">Other Lectures</div>
      <div class="flex-1 overflow-y-auto w-100">
        <VAsync :task="fetchLecturesTask">
          <template v-slot="{ value: lectures }">
            <div 
              v-for="lecture in lectures"
              :key="lecture.id"
            >
              <nuxt-link 
                class="row no-gutters align-items-center mb-25"
                :to="`/courses/${currentBatchAttempt.course.slug}/lectures/${lecture.id}`"
              >
                <div class="col-lg-6 col-sm-5 mb-sm-none mb-20">
                  <img
                    :src="lecture.thumbnail"
                    class="br-20 w-100"
                  />
                </div>
                <div class="flex-1 pl-sm-20">
                  <div class="heading-6 bold">
                    {{lecture.title}}
                  </div>
                  <div class="text-grey-light-1 font-5 mt-10">
                    <MomentFormat 
                      :date="lecture.start_time"
                      format="dddd, Do MMMM"
                    />
                  </div>
                </div>
              </nuxt-link>
            </div>
          </template>
        </VAsync>
      </div>
    </div>
  </div>  
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import VAsync from '@/components/Base/VAsync.vue';
import MomentFormat from '@/components/Base/Moment/MomentFormat.vue';
import BatchRepository from '@/repositories/batches';

export default Vue.extend({
  props: {
    batch: {
      type: Object,
      required: true
    }
  },
  components: {
    VAsync,
    MomentFormat,
  },
  computed: {
    ...mapState('current-batch-attempt', ['currentBatchAttempt'])
  },
  tasks(t) {
    return {
      fetchLecturesTask: t(function *() {
        return BatchRepository.fetchLectures(this.batch.id);
      })
    }
  }
})
</script>
