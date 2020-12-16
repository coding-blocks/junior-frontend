import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

import { Datetime } from 'vue-datetime';
 
Vue.component('datetime', Datetime);

import fieldDTPicker from './date-time-picker.vue';
// You need a specific loader for CSS files for date time picker
import 'vue-datetime/dist/vue-datetime.css'

Vue.component("fieldDTPicker", fieldDTPicker);

Vue.use(VueFormGenerator)
