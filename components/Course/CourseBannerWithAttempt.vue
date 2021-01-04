<template>
  <VAsync :task="fetchCurrentLectureTask">
    <template v-slot="{ value: currentLecture }">
      <div class="container">
        <div
          class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20 br-20 position-relative white"
          :class="course.backgroundTheme"
          v-if="currentLecture"
        >
          <div class="row align-items-center">
            <div class="col-lg-7">
              <div class="row no-gutters align-items-center">
                <img :src="course.logo" />
                <div class="flex-1 pl-30">
                  <div class="font-5">Upcoming Lecture</div>
                  <div class="white heading-2 bold">
                    {{ course.title }}
                  </div>
                </div>
              </div>
              <div class="mt-50">
                <div class="heading-5 bold">
                  {{ currentLecture.title }}
                </div>
                <div class="mt-30">
                  <div class="row no-gutters align-items-center">
                    <div
                      class="br-50 py-15 px-20 font-5 bold mr-20 mb-20"
                      style="background: rgba(255, 255, 255, 0.2)"
                    >
                      <MomentFormat
                        :date="currentLecture.start_time"
                        :format="'dddd, Do MMMM'"
                      />
                    </div>
                    <div
                      class="br-50 py-15 px-20 font-5 bold mr-20 mb-20"
                      style="background: rgba(255, 255, 255, 0.2)"
                    >
                      <MomentFormat
                        :date="currentLecture.start_time"
                        :format="'hh:mm A'"
                      />
                      Onwards
                    </div>
                  </div>
                </div>
                <div class="mt-30">
                  <div class="row no-gutters align-items-center">
                    <button
                      class="button-primary mr-20 mb-20"
                      v-if="isAfter(currentLecture.start_time)"
                    >
                      Set Reminder
                    </button>
                    <nuxt-link
                      class="button-primary button-primary--white mb-20 text-orange"
                      :to="`/courses/${course.slug}/lectures/${currentLecture.id}`"
                      v-else
                    >
                      Start Learning
                    </nuxt-link>
                  </div>
                  <div>
                    Note: Class will unlock on
                    <MomentFormat
                      :date="currentLecture.start_time"
                      :format="'D MMMM YYYY, hh:mmA'"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 mt-lg-none mt-50">
              <div
                class="br-20 position-relative mb-20 mx-auto"
                style="max-width: 450px"
              >
                <img :src="course.thumbnail" class="br-20 w-100" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20 br-20 position-relative white"
          :class="course.backgroundTheme"
          v-else
        >
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-7">
              <div class="row no-gutters align-items-center">
                <img :src="course.logo" />
                <div class="flex-1 pl-30">
                  <div class="font-5">Upcoming Lecture</div>
                  <div class="white heading-2 bold">
                    {{ course.title }}
                  </div>
                </div>
              </div>
              <div class="mt-50">
                <div class="heading-5 bold mb-20">No Upcoming Lectures</div>
                <div class="mb-40 font-5">
                  The details of your next lecture will soon be updated. In the
                  meanwhile, explore resources.
                </div>
                <nuxt-link
                  :to="`/courses/${course.slug}/resources`"
                  class="button-primary"
                >
                  Resources
                </nuxt-link>
              </div>
            </div>
            <div class="col-lg-5 mt-lg-none mt-50 t-align-c">
              <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/no-lectures-vector.svg">
            </div>
          </div>
        </div>
      </div>
    </template>
  </VAsync>
</template>
<script>
import Vue from 'vue'
import BatchesRepository from '@/repositories/batches'
import VAsync from '@/components/Base/VAsync'
import MomentFormat from '@/components/Base/Moment/MomentFormat'
import moment from 'moment'

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true,
    },
    batchAttempt: {
      type: Object,
      required: true,
    },
  },
  components: {
    VAsync,
    MomentFormat,
  },
  tasks(t) {
    return {
      fetchCurrentLectureTask: t(function* () {
        return BatchesRepository.fetchCurrentLecture(this.batchAttempt.batchId)
      }),
    }
  },
  methods: {
    isAfter: (dateA, dateB = moment()) => moment(dateA).isAfter(dateB),
  },
})
</script>
