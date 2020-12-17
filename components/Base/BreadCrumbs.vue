<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li class="px-3">
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </li>
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        class="px-3"
      >
        <nuxt-link :to="crumb.path">
          {{$route.fullPath === crumb.path && title !== null ? title : crumb.title}}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
const titleCase = require('ap-style-title-case')
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.startsWith('/')
        ? fullPath.substring(1).split('/')
        : fullPath.split('/')
      const crumbs = []
      let path = ''
      params.forEach((param, index) => {
        path = `${path}/${param}`
        const match = this.$router.match(path)
        if (match.name !== null) {
          crumbs.push({
            title: titleCase(param.replace(/-/g, ' ')),
            ...match,
          })
        }
      })
      return crumbs
    },
  },
}
</script>
