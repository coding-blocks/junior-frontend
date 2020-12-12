<template>
  <div class="position-relative">
    <div class="bg-grey-light-3 py-30 px-30 position-sticky tl mb-40 z-pos">
      <div class="container">
        <div class="row no-gutters align-items-center">
          <div class="flex-1 pr-sm-20">
            <h5 class="bold">Expand the horizons of your knowledge!</h5>
            <div class="font-5 mt-20">Explore an extensive set of resources.</div>
          </div>
          <div class="col-sm-6 col-12 mt-sm-none mt-25">
            <div class="search-bar bg-white">
              <input 
                placeholder="What are you searching for?" 
                type="text"
                @change="onSearchChange"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container z-neg">

      <div 
        v-for="{name, resources} in resourceTypeGroups"
        :key="name"
      >
        <div 
          class="row no-gutters align-items-center mb-40"
          v-if="resources.length"
        >
          <h6 class="bold">{{name}}</h6>
          <div class="bg-grey-light-3 flex-1 mx-20" style="height: 2px;"></div>
          <a href="#" class="font-4 bold text-orange">View All</a>
        </div>
        <div class="row justify-content-center">
          <div 
            class="col-lg-3 col-md-4 col-sm-6 col-10 mb-30 h-inherit"
            v-for="resource in resources"
            :key="resource.id"
          >
            <nuxt-link :to="`/courses/${courseId}/resources/${resource.id}`">
              <ResourceCard 
                :resource="resource"
              />
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import CourseRepository from '@/repositories/courses';
import ResourceCard from '@/components/Resources/ResourceCard.vue';
import { Resource } from '~/repositories/admin/resources';

export default Vue.extend({
  components: {
    ResourceCard
  },
  data() {
    return {
      resources: [],
      courseId: this.$route.params.id
    }
  },
  async asyncData({ params }) {
    const resources = await CourseRepository.fetchResources(Number(params.id));

    return {
      resources
    }
  },
  tasks(t) {
    return {
      searchResourcesTask: t(function *(query) {
        const courseId = this.$route.params.id
        const resources = yield CourseRepository.fetchResources(Number(courseId), {
          filter: {
            title: {
              $iLike: `%${query}%`
            }
          }
        })
        this.resources = resources
      }).flow('restart', { delay: 400 })
    }
  },
  computed: {
    documents() {
      return this.resources.filter(resource => resource.type === 'document');
    },
    codeChallenges() {
      return this.resources.filter(resource => resource.type === 'code-challenge');
    },
    quizzes() {
      return this.resources.filter(resource => resource.type === 'quiz')
    },
    videos() {
      return this.resources.filter(resource => resource.type === 'video')
    },
    projectChallenges() {
      return this.resources.filter(resource => resource.type === 'project-challenge')
    },
    resourceTypeGroups() {
      return [
        { name: 'Videos', resources: this.videos },
        { name: 'PDF Notes', resources: this.documents },
        { name: 'Quizzes', resources: this.quizzes },
        { name: 'Code Challenges', resources: this.codeChallenges },
        { name: 'Project Challenges', resources: this.projectChallenges },
      ]
    }
  },
  methods: {
    onSearchChange(e) {
      const query = e.target.value;
      this.searchResourcesTask.run(query);
    }
  }
})
</script>
