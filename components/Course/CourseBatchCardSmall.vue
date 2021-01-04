<template>
  <div class="card" :class="premium && 'premium-card'">
    <div class="row no-gutters justify-content-between align-items-center">
      <div class="br-20 bg-white all-center p-10 border">
        <img
          src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/python-purple.svg"
        />
      </div>
      <div class="flex-1 t-align-r premium-tag side-tag side-tag--right">
        <div class="font-5">PREMIUM</div>
        <div class="heading-5 bold text-orange">Rs 149 / Class</div>
      </div>
    </div>
    <div class="mt-20">
      <div class="heading-4 bold">{{batch.title}}</div>
      <div class="mt-10 font-5 bold">Language: Hindi | Size: {{batch.maxSize}}</div>
    </div>

    <a v-if="premium" :href="batch.productLink" class="button-primary mt-30">Buy Now</a>

    <button
      v-if="free"
      class='button-primary mt-30'
      @click="enrollInBatchTask.run()"
      :disabled="enrollInBatchTask.isActive"
    >
      {{enrollInBatchTask.isActive ? 'Enrolling' : 'Start Learning'}}
    </button>
  </div>
</template>

<script>
import Vue from 'vue';
import BatchRepository from '@/repositories/batches';

export default Vue.extend({
  props: {
    batch: {
      type: Object,
      required: true
    }
  },
  computed: {
    premium() {
      return this.batch.type === 'paid';
    },
    free() {
      return this.batch.type === 'free';
    }
  },
  tasks(t) {
    return {
      enrollInBatchTask: t(async function() {
        const batchAttempt = await BatchRepository.enrollInBatch(this.batch.id);

        this.$emit('onAfterEnroll', batchAttempt);

        return batchAttempt
      })
    }
  }
})
</script>

<style scoped>
.premium-card {
  background: linear-gradient(90deg, #4f33da, #6536de);
  color: white;
}

.premium-tag {
  display: none;
}

.premium-card .premium-tag {
  display: block;
}
</style>
