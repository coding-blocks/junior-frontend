<template>
  <div>
    <div class="row no-gutters mb-20">
      <div class="flex-1 pr-20">
        <div class="heading-6 bold">
          Q. {{troublemakerQuestion.title}}
        </div>
      </div>
    </div>
    <div class="row no-gutters mb-40">
      <VMarkdown 
        :markdown="troublemakerQuestion.description"
      />
    </div>
    <div 
      v-for="choice in choices"
      :key="choice.id"
      class="card py-10 px-20 mb-20 hover-grey pointer row no-gutters align-items-center justify-content-between"
      :class="questionSubmission['answer-ids'].includes(choice.id) && 'bg-green white'"
      @click="choiceSelected(choice)"
    >
      <div class="font-5 flex-1 pr-20">
        <VMarkdown 
          :markdown="choice.description"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import VMarkdown from '~/components/Base/VMarkdown.vue';

export default Vue.extend({
  props: {
    troublemakerQuestion: {
      type: Object,
      required: true
    },
    questionSubmission: {
      type: Object,
      required: true
    }
  },
  components: {
    VMarkdown
  },
  computed: {
    choices() {
      return this.troublemakerQuestion.choices;
    }
  },
  methods: {
    choiceSelected(choice) {
      this.$emit('onChoiceSelect', choice);
    }
  }
})
</script>
