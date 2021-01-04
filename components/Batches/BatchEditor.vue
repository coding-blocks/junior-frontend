<template>
  <div>
    <BaseEditor 
      :model="batch"
      :formSchema="schema"
      :saveTask="saveBatch"
    />
  </div>
</template>
<script>
import Vue from 'vue'
import BaseEditor from '@/components/Base/BaseEditor.vue';
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
  components: {
    BaseEditor
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
