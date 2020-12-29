<template>
  <div>
    <div class="d-flex justify-content-between">
      <vue-form-generator
        :schema="schema"
        :model="tag"
        :options="formOptions"
      />
      <TaskButton
        class="h-50"
        :task="addFeatureTask"
        text="Add"
        loadingText="Adding"
      />
    </div>
    <ul class="list-divided mt-4">
      <li
        class="tags flex-row justify-content-around items-center px-4 py-3"
        v-for="tag in tags"
        :key="tag.id"
      >
        <div class="mt-20 font-5 bold t-align-c">
          {{ tags.title }}
        </div>
        <div>
          <TaskButton
            class="h-50"
            :task="removeFeatureTask"
            :params="[tag]"
            text="Remove"
            loadingText="Removing"
          />
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import Vue from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'
import VAsync from '@/components/Base/VAsync.vue'
import TaskButton from '@/components/Base/TaskButton.vue'
import TagRepository from '@/repositories/admin/tags'
import tag from '@/forms/tag'
import Button from '../Base/Button.vue'

export default Vue.extend({
  components: {
    TaskButton,
    VAsync,
    Button,
  },
  data() {
    return {
      schema: tag(),
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
      tag: {
        title: '',
      },
      tags:[]
    }
  },
  mounted() {
    this.tags = TagRepository.fetchAll()
  },
  methods: {
    navigateToCreate() {
      this.$router.push('add')
    },
    fetchTags(){
      tags = TagRepository.fetchAll()
    }
  },
  tasks(t) {
    return {
      addFeatureTask: t(async function () {
        return TagRepository.create(this.tag) && fetchTags()
      }),
      removeFeatureTask: t(async function (feature) {
        return this.features.splice(this.features.indexOf(feature), 1);
      }),
    }
  },
})
</script>
