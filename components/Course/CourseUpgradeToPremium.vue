<template>
  <div class="card bg-gradient-purple white mb-50">
    <div class="row no-gutters align-items-center">
      <div class="col-md-6 side-tag side-tag--wide mb-50">
        <div class="row no-gutters align-items-center">
          <div class="br-10 bg-white all-center p-15">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python-purple.svg"
              style="height: 65px"
            />
          </div>
          <div
            class="flex-1 pl-30 d-sm-block d-none"
            style="margin-bottom: -15px"
          >
            <div class="heading-5 bold">Upgrade to</div>
            <div
              class="gradient-text-yellow"
              style="
                font-size: 72px;
                font-family: 'BebasNeue', sans-serif !important;
              "
            >
              PREMIUM BATCH
            </div>
          </div>
          <div class="col-12 mt-25 d-sm-none d-block">
            <div class="heading-5 bold">Upgrade to</div>
            <div
              class="gradient-text-yellow"
              style="
                font-size: 60px;
                font-family: 'BebasNeue', sans-serif !important;
              "
            >
              PREMIUM BATCH
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 pl-md-30">
        <div class="row mb-25">
          <div class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25">
            <div class="card all-center">
              <img
                src="https://minio.codingblocks.com/public/feature-code.png"
                style="height: 50px"
              />
            </div>
            <div class="mt-20 font-5 bold t-align-c">Feature 1</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mentor-row mb-40" v-if="batch.instructors.length">
      <div class="mentor-row__image-container">
        <img
          :src="batch.instructors[0].image"
          class="mentor-row__image-container__mentor-image s-80x80"
        />
      </div>
      <div class="mentor-row__text-container align-self-center">
        <div class="font-5">Instructors</div>
        <div class="mt-10 heading-5 bold">
          {{ batch.instructors.map((instructor) => instructor.name).join() }}
        </div>
      </div>
    </div>
    <div class="row no-gutters justify-content-between align-items-center" v-if="batch.acceptingAdmissions">
      <div class="col-md-6 col-12 mb-md-none mb-25">
        <div class="heading-4 bold mb-10">{{ batch.title }}</div>
        <div class="heading-6">
          Language: {{ batch.language }} | Size: {{ batch.maxSize }}
        </div>
      </div>
      <div class="v-align-ma flex-1 t-align-r">
        <span class="text-orange bold heading-5">₹{{ batch.sellingPrice }}</span>
        <a :href="batch.productLink" class="button-primary ml-30"
          >Upgrade Now</a
        >
      </div>
    </div>
    <div class="no-gutters align-items-right" v-else>
      <div class="font-5 bold t-align-c">Currently not accepting any enrollments</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    batch: {
      type: Object,
      required: true,
    },
  },
})
</script>
