<template>
  <div class="card h-100 p-none">
    <div class="flex-col h-100">
      <TabNavigation class="tl p-30 w-100" :tabs="tabs">
        <template v-slot="{ component }">
          <component 
            :is="component" 
            :lecture="lecture"
          />
        </template>
      </TabNavigation>
    </div>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue';
import TabNavigation from '@/components/Base/TabNavigation.vue';
import TaggedResources from '@/components/Classroom/LectureResourcesCard/TaggedResources.vue';
import HomeworkResources from '@/components/Classroom/LectureResourcesCard/HomeworkResources.vue';

export default Vue.extend({
  props: {
    lecture: {
      type: Object,
      required: true
    }
  },
  components: {
    TabNavigation
  },
  data() {
    return {
      tabs: [
        { name: 'Resources', component: TaggedResources },
        { name: 'Homework', component: HomeworkResources }
      ]
    }
  },
})
</script>
