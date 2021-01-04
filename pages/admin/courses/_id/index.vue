<template>
  <div>
    <nuxt-link
      class="button-solid button-orange my-3 px-5"
      :to="`${this.$route.params.id}/batches`"
    >
      Batches
    </nuxt-link>

    <nuxt-link
      class="button-solid button-orange my-3 px-5"
      :to="`${this.$route.params.id}/resources`"
    >
      Resources
    </nuxt-link>

    <TabNavigation class="tl w-100" :tabs="tabs">
      <template v-slot="{ component }">
        <component 
          :is="component" 
          :course="course" 
          @onAfterSave="afterSave"
        />
      </template>
    </TabNavigation>
  </div>
</template>
 
<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import CourseEditor from '@/components/Course/CourseEditor.vue'
import CourseRepository from '@/repositories/admin/courses'
import TabNavigation from '@/components/Base/TabNavigation.vue'
import CourseFeatureEditor from '~/components/Course/CourseFeatureEditor.vue'

export default Vue.extend({
  components: {
    CourseEditor,
    TabNavigation,
  },
  computed: {
    ...mapState('route-data', ['routeDataMap']),
    course() {
      return this.routeDataMap['admin-courses-id'].course
    },
  },
  data() {
    return {
      tabs: [
        { name: 'Course Information', component: CourseEditor },
        { name: 'Course Features', component: CourseFeatureEditor }
      ]
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