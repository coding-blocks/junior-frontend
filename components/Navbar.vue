<template>
  <div>
    <div
      class="row c-topnav justify-content-between align-items-center px-md-20 px-none py-20"
    >
      <div class="col-md-6 px-0">
        <div class="d-md-none d-block d-flex align-items-center ml-3">
          <div class="hamburger-menu mr-3">
            <div class="ham-toggle" @click="openNavbar">
              <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <img
            src="https://minio.cb.lk/public/logo.png"
            alt="Logo"
            style="height: 36px"
          />
        </div>
        <a href="/">
        <div class="d-md-block d-none pl-4">
          <img
            src="https://minio.cb.lk/public/logo.png"
            alt="Logo"
            style="height: 36px"
          />
        </div>
        </a>
      </div>
      <ul class="d-md-flex d-none align-items-center">
        <li class="px-3 font-5 bold">
          <nuxt-link to="/" exact> Home </nuxt-link>
        </li>
        <li class="px-3 font-5 bold">
          <nuxt-link to="/courses"> All Courses </nuxt-link>
        </li>
        <li class="px-3 font-5 bold" v-if="user">
          <nuxt-link to="/dashboard"> Dashboard </nuxt-link>
        </li>
        <li class="hoverable px-3" v-if="user">
          <div class="font-5 bold">Hi, {{ user.name }}</div>
          <div class="pop-up border-card p-3 br-5">
            <ul class="t-align-l">
              <li>
                <a
                  href="https://account.codingblocks.com/users/me"
                  target="_blank"
                >
                  Profile
                </a>
              </li>
              <div class="divider-h my-3"></div>
              <li>
                <a class="dark-grey" href="/pages/logout"> Logout </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="pl-3 font-5 bold" v-else>
          <a class="button-primary" href="/pages/login"> Get Started </a>
        </li>
      </ul>
    </div>

    <cb-mobile-navbar id="navbar" logo="">
      <div class="my-4 pl-4" v-if="user">
        <div class="pl-4">
          <div class="extra-bold gradient-text font-mds">
            {{ user.name }}
          </div>
        </div>
      </div>
    </cb-mobile-navbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import Button from './Base/Button.vue'

export default Vue.extend({
  name: 'AdminNavbar',
  components: {
    Button,
  },
  computed: {
    ...mapState('session', ['user']),
  },
  methods: {
    openNavbar() {
      const navbar = document.getElementById('navbar')
      if (navbar) {
        navbar.showhamburger = true
      }
    },
  },
})
</script>
