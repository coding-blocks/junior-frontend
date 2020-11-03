import Vue from 'vue'
const VueFormGenerator = require('vue-form-generator')
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormGenerator, {
  validators: {
    validSlug: (value, field, model) => {
      let regex = /^[a-z](-?[a-z])*$/

      if (!regex.test(value)) {
        return [ 'kebab-case (hyphen separated) name and avoid special characters' ]
      } else {
        return []
      }
    }
  }
})