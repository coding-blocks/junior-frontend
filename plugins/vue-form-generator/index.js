import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import { Datetime } from 'vue-datetime';	

import fieldDatePicker from './date-picker.vue';
import fieldDTPicker from './date-time-picker.vue';
import fieldColorSelector from './color-selector.vue';
import fieldFileUploader from './file-uploader.vue';
// You need a specific loader for CSS files for date time picker
import 'vue-datetime/dist/vue-datetime.css'


Vue.component("fieldDTPicker", fieldDTPicker);
Vue.component("fieldDatePicker", fieldDatePicker);
Vue.component("fieldColorSelector", fieldColorSelector);
Vue.component("fieldFileUploader", fieldFileUploader);
Vue.component('datetime', Datetime);
Vue.component('date', Datetime);

Vue.use(VueFormGenerator)
