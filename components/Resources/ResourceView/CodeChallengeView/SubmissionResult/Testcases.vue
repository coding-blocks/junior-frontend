<template>
  <div class="">
    <div class="row no-gutters bg-grey-light-2">
      <div class="col-4 col-md-3">
        <h5 class="py-4 t-align-c font-5">Test Cases</h5>
      </div>
      <div class="col-8 col-md-9">
        <h5 class="py-4 t-align-c font-5">Result</h5>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-md-3 col-4 bg-grey-light-2">
        <ul class="font-mds extra-bold mt-0">    
            <li 
              class="px-5 py-4 d-flex align-items-center font-4"
              v-for="(testcase, index) in testcases"
              :key="testcase.id"
              :class="selectedTestcase.id === testcase.id && 'bg-grey-light-1'"
            >
              <a 
                href="#" 
                class="gradient-text-green"
                v-if="testcase.result === 'Success'"
                @click.prevent="setSelectedTestcase(index)"
              >
                Test Case {{index}}
                <fa icon="faCheck" class="ml-2 gradient-text-green" />
              </a>
              <a 
                href="#" 
                class="gradient-text-orange"
                v-else-if="testcase.result === 'Run Error'"
                @click.prevent="setSelectedTestcase(index)"
              >
                Test Case {{index}}
                <fa icon="faExclamation" class="ml-2 gradient-text-green" />
              </a>
              <a 
                href="#" 
                class="gradient-text-pink"
                v-else-if="testcase.result === 'Wrong Answer'"
                @click.prevent="setSelectedTestcase(index)"
              >
                Test Case {{index}}
                <fa icon="faTimes" class="ml-2 gradient-text-green" />
              </a>
              <a 
                href="#" 
                class="gradient-text-orange"
                v-else-if="testcase.result === 'TLE'"
                @click.prevent="setSelectedTestcase(index)"
              >
                Test Case {{index}}
                <fa icon="faExclamationTriangle" class="ml-2 gradient-text-green" />
              </a>
              <a 
                href="#" 
                class="gradient-text-pink"
                v-else
                @click.prevent="setSelectedTestcase(index)"
              >
                Test Case {{index}}
                <fa icon="faExclamationTriangle" class="ml-2 gradient-text-pink" />
              </a>
            </li>
        </ul>
      </div>
      <div class="col-md-9 col-8">
        <div class="py-5 px-5">
          <h6 class="bold">Compile Message</h6>
          <div class="bg-grey-light-2 p-4 mt-3 mb-5">
            <pre class="font-sm">{{selectedTestcase.result}}</pre>
          </div>
            <div class="bg-grey-light-2 p-4 mt-3 mb-5" v-if="selectedTestcase">
              <div class="font-sm">Time: {{selectedTestcase.time}}</div>
            </div>
        </div>
      </div>
    </div>
  </div> 
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    testcases: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedTestcase: this.testcases[0]
    }
  },
  methods: {
    setSelectedTestcase(index) {
      this.selectedTestcase = this.testcases[index];
    }
  }
})
</script>
