<template>
  <div>
    <CourseTagEditor />
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Button from '@/components/Base/Button.vue';
import CourseTagEditor from '@/components/Course/CourseTagEditor.vue'
import TagRepository from '@/repositories/admin/tags';

export default Vue.extend({
  components: {}
})
</script>
