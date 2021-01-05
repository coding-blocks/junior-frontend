<template>
<div>
  <multiselect v-model="value" label="title" track-by="id" placeholder="Type to search"  open-direction="bottom" :options="values" :multiple="true" :searchable="true" :loading="fetchTagTask.isActive" :internal-search="false" :clear-on-select="true" :close-on-select="false" :options-limit="300" :limit="6" :limit-text="limitText" :max-height="600" :show-no-results="false" :hide-selected="true" @search-change="asyncFind">
    <template slot="tag" slot-scope="{ option, remove }"><span class="custom__tag"><span>{{ option.title }}</span><span class="custom__remove" @click="remove(option)">❌</span></span></template>
    <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
  </multiselect>
</div> 
</template>
<script>
import Vue from 'vue';
import { abstractField } from 'vue-form-generator'
import TagRepository from '@/repositories/admin/tags'
import Multiselect from 'vue-multiselect/src/Multiselect.vue';

export default Vue.extend({
  mixins: [abstractField],
  components: {
    Multiselect
  },
  data () {
    return {
      values: [],
      isLoading: false
    }
  },
  methods: {
    limitText (count) {
      return `and ${count} other tags`
    },
    async asyncFind (query) {
			this.fetchTagTask.run(query)
    },
    clearAll () {
      this.value = []
    }
	},
	tasks(t, ){
			return {
				fetchTagTask: t(async (query) => {
					const response = await TagRepository.fetchAll({
          	filter: {
            title: {
              $iLike: `%${query}%`,
            },
         	},
				})
					this.values = response
				}).flow('restart', { delay: 400 }),
			}
	}
})
</script>
<style lang="sass">
.custom__tag
  display: inline-block
  padding: 3px 12px
  background: #d2d7ff
  margin-right: 8px
  margin-bottom: 8px
  border-radius: 10px
  cursor: pointer
  &:nth-child(even)
    background: #daffee
  &:hover
    background: #eaeaea
.custom__remove
  padding: 0px
  font-size: 10px
  margin-left: 5px
</style>