<template>
  <div>
    <div class="row no-gutters align-items-center justify-content-between mb-20">
      <div class="flex-1 pr-20">
        <div class="heading-6 bold">
          Q. {{troublemakerQuestion.title}}
        </div>
      </div>
      <div class="s-60x60 border b-pink all-center round">
        <div class="t-align-c pink">
          <h5 class="bold">30</h5>
          <div class="font-3">SEC</div>
        </div>
      </div>
    </div>
    <div class="row no-gutters mb-40">
      <VMarkdown 
        :markdown="troublemakerQuestion.description"
      />
    </div>
    <div 
      class="card py-10 px-20 mb-20 hover-grey pointer row no-gutters align-items-center justify-content-between"
      v-for="choice in choices"
      :key="choice.id"
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
    }
  },
  components: {
    VMarkdown
  },
  computed: {
    choices() {
      return this.troublemakerQuestion.choices;
    }
  }
})
</script>
