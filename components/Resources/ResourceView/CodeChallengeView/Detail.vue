<template>
  <div>
    <div>
      <VMarkdown 
        :markdown="problem.problem.details.description"
      />
    </div>
    <div class="extra-bold">Input Format</div>
    <p>
      {{problem.problem.details['input-format']}}
    </p>
    <div class="extra-bold">Constraints</div>
    <div class="bg-grey-light-2 br-5 w-60 px-20 py-10 my-10">
      <p>
        {{problem.problem.details['constraints']}}
      </p>
    </div>
    <div class="extra-bold">Output Format</div>
    <p>
      {{problem.problem.details['output-format']}}
    </p>
    <div class="extra-bold">Sample Input</div>
    <div class="bg-grey-light-2 br-5 w-60 px-20 py-10 my-10">
      <pre>{{problem.problem.details['sample-input']}}</pre>
    </div>
    <div class="extra-bold">Sample Output</div>
    <div class="bg-grey-light-2 br-5 w-60 px-20 py-10 my-10">
      <pre>{{problem.problem.details['sample-output']}}</pre>
    </div>  
    <div v-if="problem.problem.details.explanation">
      <div class="extra-bold">Explanation</div>
      <div class="bg-grey-light-2 br-5 w-60 px-4 py-2 my-2">
        <VMarkdown 
          :markdown="problem.problem.details.explanation"
        />
      </div>
    </div>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue';
import VMarkdown from '@/components/Base/VMarkdown.vue';

export default Vue.extend({
  props: {
    problem: {
      type: Object,
      required: true
    }
  },

})
</script>
