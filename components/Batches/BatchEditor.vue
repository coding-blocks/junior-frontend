<template>
    <form action="" @submit.prevent="() => saveBatch.run()">
      <vue-form-generator
        :schema="schema"
        :model="batch"
        :options="formOptions"
      />
      <button
        class="button-solid button-orange my-3 px-5 float-right"
        :disabled="saveBatch.isActive"
      >
        {{ saveBatch.isActive ? 'Saving...' : 'Save' }}
      </button>
    </form>
</template>
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
import batchForm from '@/forms/batch'
import BatchRepository from '@/repositories/admin/batches'

export default Vue.extend({
  props: {
    batch: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      schema: batchForm(),
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    }
  },
  tasks(t) {
    return {
      saveBatch: t(async function () {
        if (this.batch.id) {
          await BatchRepository.update(this.batch.id, this.batch)
        } else {
          await BatchRepository.create(this.batch)
        }
        this.$emit('onAfterSave')
      }).flow('drop'),
    }
  },
})
</script>
