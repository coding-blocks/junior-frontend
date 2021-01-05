import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'
import { Datetime } from 'vue-datetime';	

import fieldDatePicker from './date-picker.vue';
import fieldDTPicker from './date-time-picker.vue';
import fieldColorSelector from './color-selector.vue';
import fieldFileUploader from './file-uploader.vue';
import fieldSearchSelect from './search-select.vue';

import 'vue-datetime/dist/vue-datetime.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'


Vue.component("fieldDTPicker", fieldDTPicker);
Vue.component("fieldDatePicker", fieldDatePicker);
Vue.component("fieldColorSelector", fieldColorSelector);
Vue.component("fieldFileUploader", fieldFileUploader);
Vue.component('datetime', Datetime);
Vue.component('date', Datetime);
Vue.component('fieldSearchSelect', fieldSearchSelect);

Vue.use(VueFormGenerator)
