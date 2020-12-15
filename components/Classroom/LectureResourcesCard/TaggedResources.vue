<template>
  <div class="overflow-y-auto pb-30 w-100">
    <VAsync :task="fetchTaggedResources">
      <template v-slot="{ value: resources }">
        <TaggedResourceItem 
          v-for="resource in resources"
          :key="resource.id"
          :resource="resource"
          :lecture="lecture"
        />
      </template>
    </VAsync>
  </div>  
</template>
<script>
import Vue from 'vue';
import VAsync from '@/components/Base/VAsync.vue';
import TaggedResourceItem from '@/components/Classroom/LectureResourcesCard/TaggedResourceItem.vue';
import LectureRepository from '@/repositories/lectures';

export default Vue.extend({
  props: {
    lecture: {
      type: Object,
      required: true
    }
  },
  components: {
    VAsync,
    TaggedResourceItem,
  },
  tasks(t) {
    return {
      fetchTaggedResources: t(async function() {
        return LectureRepository.fetchResources(this.lecture.id)
      })
    }
  }
})
</script>
