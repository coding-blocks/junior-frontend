<template>
  <div class="dropdown">
    <VAsync :task="searchResourcesTask">
      <template v-slot="{ value: resources }">
        <input
          v-if="Object.keys(selectedItem).length === 0"
          ref="dropdowninput"
          v-model.trim="inputValue"
          class="dropdown-input"
          type="text"
          placeholder="Find resources"
          @keyup="onSearchChange"
        />
        <div v-else @click="resetSelection" class="dropdown-selected">
          {{ selectedItem.title }}
        </div>
        <div class="dropdown-list">
          <div
            @click="selectItem(item)"
            v-for="item in resources"
            :key="item.id"
            class="dropdown-item"
          >
            {{ item.title }}
          </div>
        </div>
      </template>
    </VAsync>
  </div>
</template>

<script>
import ResourcesRepository from '@/repositories/admin/resources'
import VAsync from '@/components/Base/VAsync.vue'
export default {
    components: {
          VAsync,
    },
  data() {
    return {
      selectedItem: {},
      inputValue: '',
    }
  },
  tasks(t) {
    return {
      searchResourcesTask: t(function* (query) {
        return ResourcesRepository.fetchAll({
          filter: {
            title: {
              $iLike: `%${query}%`,
            },
          },
        })
      }).flow('restart', { delay: 400 }),
    }
  },
  methods: {
    resetSelection() {
      this.selectedItem = {}
      this.$nextTick(() => this.$refs.dropdowninput.focus())
      this.$emit('on-item-reset')
    },
    selectItem(theItem) {
      this.selectedItem = theItem
      this.inputValue = ''
      this.$emit('on-item-selected', theItem)
    },
    onSearchChange(e) {
      const query = e.target.value
      this.searchResourcesTask.run(query)
    },
  },
}
</script>

<style>
.dropdown {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.dropdown-input,
.dropdown-selected {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}
.dropdown-input:focus,
.dropdown-selected:hover {
  background: #fff;
  border-color: #e2e8f0;
}
.dropdown-input::placeholder {
  opacity: 0.7;
}
.dropdown-selected {
  font-weight: bold;
  cursor: pointer;
}

.dropdown-list {
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.dropdown-item {
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #edf2f7;
}

.dropdown-item-flag {
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0px;
}
</style>