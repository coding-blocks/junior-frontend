<template>
  <div>
    <ResourceEditor 
      :resource="resource"
      @onAfterSave="afterSave" 
    />
  </div>
</template>
 
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex';
import ResourceEditor from '@/components/Resources/ResourceEditor';
import ResourceRepository from '@/repositories/admin/resources';

export default Vue.extend({
  name: 'CourseEditPage',
  layout: 'admin',
  components: {
    ResourceEditor
  },
  data() {
    return {
      resource: null
    }
  },
  async asyncData({ params }) {
    const resource = await ResourceRepository.fetchById(params.id)

    return {
      resource
    }
  },
  methods: {
    afterSave() {
      this.$notify({
        group: 'admin',
        title: 'Saved Successfully !'
      })
    }
  }
})
</script>