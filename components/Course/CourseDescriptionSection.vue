<template>
  <div class="row">
    <div class="col-md-6">
      <div class="heading-5 bold">Course Description</div>
      <div class="heading-6 my-40 text-grey">
        {{course.description}}
      </div>
      <button 
        class="button-primary"
        @click="setShowSyllabusModal(true)"
      >
        View Complete Syllabus
      </button>
    </div>
    <div class="col-md-6 mt-md-none mt-50">
      <div class="heading-5 bold mb-40">Course Features</div>
      <div 
        class="row mb-25"
        v-if="courseFeatures.length"
      >
        <div 
          class="col-xl-3 col-md-6 col-sm-3 col-6 mb-25"
          v-for="courseFeature in courseFeatures"
          :key="courseFeature.id"
        >
          <div class="card all-center">
            <img
              :src="courseFeature.logo"
              style="height: 50px"
            />
          </div>
          <div class="mt-20 font-5 bold t-align-c">{{courseFeature.title}}</div>
        </div>
      </div>
      <div v-if="capstoneProject">
        <div class="heading-5 bold mb-40">Capstone Project</div>
        <div class="card">
          <div
            class="row no-gutters align-items-center justify-content-between"
          >
            <div class="flex-1 d-sm-block d-none">
              <div class="heading-5 bold mb-10">{{capstoneProject.title}}</div>
              <div class="text-grey-light-1 font-5">
                {{capstoneProject.description}}
              </div>
            </div>
            <div class="col-12 d-sm-none d-block mb-25">
              <div class="heading-5 bold mb-10">{{capstoneProject.title}}</div>
              <div class="text-grey-light-1 font-5">
                {{capstoneProject.description}}
              </div>
            </div>
            <a 
              :href="capstoneProject.url"
              target="_blank"
              class="button-secondary button-secondary--light"
            >
              View Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="showSyllabusModal" @close="setShowSyllabusModal(false)">
      <CourseSyllabusModal 
        :course="course"
      />
    </Modal>
  </div>
</template>
<script>
import Vue from 'vue';
import Modal from '@/components/Base/Modal.vue';
import CourseSyllabusModal from '@/components/Course/CourseSyllabusModal.vue';

export default Vue.extend({
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  components: {
    Modal,
    CourseSyllabusModal,
  },
  data() {
    return {
      showSyllabusModal: false
    }
  },
  computed: {
    courseFeatures() {
      return this.course.courseFeatures || []
    },
    capstoneProject() {
      return this.course.courseProjects.find(project => project.capstone);
    }
  },
  methods: {
    setShowSyllabusModal(value) {
      this.showSyllabusModal = value
    }
  }
})
</script>
