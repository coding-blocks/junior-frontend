import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

import fieldDTPicker from './date-time-picker.vue';
import fieldColorSelector from './color-selector.vue';
import fieldFileUploader from './file-uploader.vue';
import fieldToggle from './toggle.vue';
// You need a specific loader for CSS files for date time picker
import 'vue-datetime/dist/vue-datetime.css'

Vue.component("fieldDTPicker", fieldDTPicker);
Vue.component("fieldColorSelector", fieldColorSelector);
Vue.component("fieldFileUploader", fieldFileUploader);
Vue.component("fieldToggle", fieldToggle);

Vue.use(VueFormGenerator)
