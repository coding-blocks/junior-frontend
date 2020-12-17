<template>
  <div>
    <nuxt-link
      class="button-solid button-orange my-3 px-5"
      :to="`${this.$route.params.lectureId}/resources`"
    >
      Resources
    </nuxt-link>
    <LectureEditor 
      :lecture="lecture"
    />
  </div>
</template>
 
<script>
import Vue from 'vue'
import { mapState } from 'vuex';
import LectureEditor from '@/components/Lectures/LectureEditor';

export default Vue.extend({
  components: {
    LectureEditor
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    lecture() {
      return this.routeDataMap['admin-lectures-lectureId']?.lecture
    },
  },
})
</script>