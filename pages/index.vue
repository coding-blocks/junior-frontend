<template>
  <div class="junior-landing">
    <div class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20">
      <div class="container">
        <div class="row no-gutters align-items-center justify-content-between">
          <div class="flex-1">
            <div class="heading-1 bold">
              Coding is for every
              <span class="extra-bold orange">child.</span>
            </div>
            <div class="mt-30 grey heading-5">
              Live 1:1 coding classes to introduce you to the world of coding.
            </div>
            <div class="mt-40">
              <button class="button-primary">Get Started</button>
              <button
                class="ml-30 button-secondary button-secondary--light d-xl-inline-block d-md-none d-sm-inline-block d-none"
                @click="setShowBookSessionModal(true)"
              >
                Book counselling session
              </button>
              <br />
              <div
                class="d-xl-none d-md-inline-block d-sm-none d-inline-block mt-20"
              >
                <button
                  class="button-secondary button-secondary--light"
                  @click="setShowBookSessionModal(true)"
                >
                  Book counselling session
                </button>
              </div>
            </div>
          </div>
          <img
            src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/junior-landing-vector.svg"
            class="mt-md-none mt-40"
          />
        </div>
      </div>
    </div>

    <VAsync :task="fetchRecommendedCourseTask">
      <template v-slot="{ value: course }">
        <CourseRecommendedCard v-if="course" :course="course" />
      </template>
    </VAsync>

    <div
      class="pt-xl-100 pt-lg-75 pt-md-50 pt-30 px-xl-100 px-lg-75 px-md-50 px-sm-30 px-20"
    >
      <div class="heading-3 bold t-align-c">Learning journey with us</div>
    </div>
    <div
      class="mt-lg-60 mt-sm-45 mt-30 row c-card-carousel mb-xl-100 mb-lg-75 mb-md-50 mb-sm-30 mb-20"
    >
      <div
        class="col-lg-3 col-sm-4 col-6 h-inherit"
        v-for="data in learningJourney"
        :key="data.title"
      >
        <div class="flex-col h-100 justify-content-between t-align-c">
          <img :src="data.image" class="br-20 w-80" />
          <div class="mt-40 heading-5 word-wrap t-align-c w-100">
            {{ data.title }}
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div
        class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20 br-20 white bg-gradient-blue-dark"
      >
        <div class="row align-items-center">
          <div class="col-lg-7">
            <div class="heading-3 bold">Kids and parents love us!!</div>
            <div class="my-40">
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
                class="mr-sm-10 mr-5"
              />
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
                class="mr-sm-10 mr-5"
              />
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
                class="mr-sm-10 mr-5"
              />
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
                class="mr-sm-10 mr-5"
              />
              <img
                src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/star_round.svg"
              />
            </div>
            <div class="font-5">
              My daughter is in Grade 2 and we started attending the Block
              programming classes. I am very satisfied with the way she is
              progressing. She has started making games on her own in SpriteLab.
              I would like to congratulate the Coding Blocks Jr team and wish
              you guys success.
            </div>
            <div class="mt-40 heading-6 bold">
              John Doe, Father of Johny Doe
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20">
      <div class="container">
        <div class="t-align-c bold heading-3 mb-md-80 mb-sm-60 mb-50">
          Numbers speak louder
        </div>
        <div class="row align-items-center">
          <div class="col-md-3 col-6 t-align-c">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/learning_hours.svg"
              class="mb-40"
            />
            <div class="orange bold mb-15" style="font-size: 50px">75000+</div>
            <div class="heading-6 word-wrap">Hours of Learning</div>
          </div>
          <div class="col-md-3 col-6 t-align-c">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/students_taught.svg"
              class="mb-40"
            />
            <div class="orange bold mb-15" style="font-size: 50px">8000+</div>
            <div class="heading-6 word-wrap">No. of students taught</div>
          </div>
          <div class="col-md-3 col-6 mt-md-none mt-50 t-align-c">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/projects.svg"
              class="mb-40"
            />
            <div class="orange bold mb-15" style="font-size: 50px">3000+</div>
            <div class="heading-6 word-wrap">Projects submitted</div>
          </div>
          <div class="col-md-3 col-6 mt-md-none mt-50 t-align-c">
            <img
              src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/certificates_issued.svg"
              class="mb-40"
            />
            <div class="orange bold mb-15" style="font-size: 50px">8000+</div>
            <div class="heading-6 word-wrap">Certificates issued</div>
          </div>
        </div>
      </div>
    </div>

    <div class="divider-h"></div>

    <div class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20">
      <div class="container">
        <div class="heading-3 bold t-align-c mb-60">
          Our Perspective on education system
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="font-5">
              We started Coding Blocks in 2014, skillifying and guiding College
              students and working professional into the world of coding. Now,
              with the right resources and team in hand, we are here with Coding
              Blocks Jr, a specialised division of Coding Blocks which focusses
              on empowering School students with Coding education in multiple
              streams of technology.
            </div>
            <div class="mt-30 font-5">
              <VAccordion :tabs="perspectiveTabs" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="divider-h"></div>

    <div class="p-xl-100 p-lg-75 p-md-50 p-sm-30 p-20">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 mb-lg-none mb-40">
            <div class="card br-20 bg-gradient-blue-dark">
              <div
                class="row align-items-center justify-content-between no-gutters"
              >
                <div class="flex-1 white d-sm-block d-none">
                  <div class="heading-5 mb-15">Wherever you go!</div>
                  <div class="heading-5 bold mb-40">
                    Download the app and always stay connected!
                  </div>
                  <div class="row no-gutters align-items-center">
                    <img
                      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/app-store.svg"
                      class="mr-15"
                    />
                    <img
                      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/google-play.svg"
                    />
                  </div>
                </div>
                <div class="col-12 d-sm-none d-block mb-25 white">
                  <div class="heading-5 mb-15">Wherever you go!</div>
                  <div class="heading-5 bold mb-40">
                    Download the app and always stay connected!
                  </div>
                  <div class="row no-gutters align-items-center">
                    <img
                      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/app-store.svg"
                      class="mr-15"
                    />
                    <img
                      src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/google-play.svg"
                    />
                  </div>
                </div>
                <img
                  src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/junior.svg"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="card br-20 mb-40">
              <a href="" target="_blank">
                <div class="row no-gutters align-items-center">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/discord.svg"
                  />
                  <div class="flex-1 pl-25">
                    <div class="font-5 bold mb-10">Join Discord Community</div>
                    <div class="font-4">
                      Get your doubts clarified related to courses on our
                      Discord Channel
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="card br-20">
              <a
                href="https://www.youtube.com/codingblocksindia"
                target="_blank"
              >
                <div class="row no-gutters align-items-center">
                  <img
                    src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/youtube.svg"
                  />
                  <div class="flex-1 pl-25">
                    <div class="font-5 bold mb-10">Join Youtube Community</div>
                    <div class="font-4">
                      Live classes of our courses are conducted on CB Jr Youtube
                      channel.
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal @close="setShowBookSessionModal(false)" v-if="showBookSessionModal">
      <template>
        <BookSessionModal />
      </template>
    </Modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Modal from '@/components/Base/Modal.vue'
import VAsync from '@/components/Base/VAsync.vue'
import VAccordion from '@/components/Base/VAccordion.vue'
import BookSessionModal from '@/components/LandingPage/BookSessionModal.vue'
import CourseRecommendedCard from '@/components/Course/CourseRecommendedCard.vue'
import CourseRepository from '@/repositories/courses'

export default Vue.extend({
  components: {
    Modal,
    VAsync,
    VAccordion,
    CourseRecommendedCard,
  },
  data() {
    return {
      showBookSessionModal: false,
      learningJourney: [
        {
          title: 'Get enrolld in a course',
          image: 'https://minio.cb.lk/public/learning-journey-1.png',
        },
        {
          title: 'Live interactive learning',
          image: 'https://minio.cb.lk/public/learning-journey-2.png',
        },
        {
          title: 'Reinforce concepts through various resources',
          image: 'https://minio.cb.lk/public/learning-journey-3.png',
        },
        {
          title: 'Get instant Doubt Resolution',
          image: 'https://minio.cb.lk/public/learning-journey-4.png',
        },
        {
          title: 'Interesting Projects for Hands on experience',
          image: 'https://minio.cb.lk/public/learning-journey-5.png',
        },
        {
          title: 'Become a Certified Coder',
          image: 'https://minio.cb.lk/public/learning-journey-6.png',
        },
      ],
      perspectiveTabs: [
        {
          title: 'What is the eligibility for coding blocks junior?',
          description: 'Anyone and everyone can join codingblocks junior.',
        },
        {
          title: 'What is the eligibility for coding blocks junior?',
          description: 'Anyone and everyone can join codingblocks junior.',
        },
        {
          title: 'What is the eligibility for coding blocks junior?',
          description: 'Anyone and everyone can join codingblocks junior.',
        },
      ],
    }
  },
  tasks(t) {
    return {
      fetchRecommendedCourseTask: t(async function () {
        const courses = await CourseRepository.fetchAll({
          filter: {
            isRecommended: true,
          },
        })
        return courses[0]
      }),
    }
  },
  methods: {
    setShowBookSessionModal(value) {
      this.showBookSessionModal = value
    },
  },
})
</script>
