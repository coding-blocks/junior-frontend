<template>
  <div>
    <div class="row c-topnav py-4 justify-content-between align-items-center">
      <div class="col-6 px-0">
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
        </div>
      </div>
      <ul class="right-nav d-md-flex d-none">
        <li class="top-nav-option px-3">
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li class="top-nav-option px-3">
          <nuxt-link to="/courses">
            All Courses
          </nuxt-link>
        </li>
        <li class="top-nav-option px-3">
          <nuxt-link to="/">
            Upcoming Webinars
          </nuxt-link>
        </li>
        <li class="top-nav-option hoverable px-3" v-if="user">
          <div class="img-desc align-items-center font-sm">
            <div class="description ml-4 font-sm bold">Hi, {{user.name}}</div>
          </div>
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
        <li class="top-nav-option px-3" v-else>
          <a class="button-solid button-orange" href="/pages/login">
            Login
          </a>
        </li>
      </ul>
    </div>

    <cb-mobile-navbar id="navbar" logo="">
      <div 
        class="my-4 pl-4"
        v-if="user"
      >
        <div class="pl-4">
          <div class="extra-bold gradient-text font-mds">
            {{user.name}}
          </div>
        </div>
      </div>
    </cb-mobile-navbar>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import Button from './Base/Button.vue';

export default Vue.extend({
  name: 'AdminNavbar',
  components: {
    Button,
  },
  computed: {
    ...mapState('session', ['user'])
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
