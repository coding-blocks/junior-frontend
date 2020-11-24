import Vue from 'vue';

const baseComponents = [
  'Button',
  'VAsync'
]

baseComponents.forEach(component => {
  Vue.component(component, require(`@/components/Base/${component}`));
})
