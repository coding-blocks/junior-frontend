<template>
  <div class="row">
    <div class="col-md-6 col-lg-8" style="height: calc(100vh - 150px)">
      <VAsync :task="fetchProblemTask">
        <template v-slot="{ value: problem }">
          <div class="card mb-50">
            <TabNavigation :tabs="tabs">
              <template v-slot="{ component }">
                <component 
                  :is="component"
                  :resource="resource"
                  :problem="problem"
                />
              </template>
            </TabNavigation>
          </div>
          <CodeEditor 
            :problem="problem"
          />
        </template>
      </VAsync>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="card code-card">
        <div class="d-flex align-items-center">
          <div>
            <img 
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/calender-green.svg" 
              style="height: 45px;"
            >
          </div>
          <div class="ml-3">
            <div class="font-4">Code Challenge</div>
            <div class="font-5 bold">{{resource.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import ResourceRepository from '@/repositories/resources';
import TabNavigation from '@/components/Base/TabNavigation.vue';
import CodeEditor from '@/components/Resources/ResourceView/CodeChallengeView/CodeEditor.vue';
import Detail from '@/components/Resources/ResourceView/CodeChallengeView/Detail.vue';
import Submissions from '@/components/Resources/ResourceView/CodeChallengeView/Submissions.vue';

export default Vue.extend({
  props: {
    resource: {
      type: Object,
      required: true
    },
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    CodeEditor,
    TabNavigation
  },
  data() {
    return {
      tabs: [
        { name: 'Problem', component: Detail },
        { name: 'Submissions', component: Submissions },
      ]
    }
  },
  tasks(t) {
    return {
      fetchProblemTask: t(async () => {
        return ResourceRepository.fetchResourceTypePayload(this.resource.id, this.course.id)
      }),

    }
  }
})
</script>
