<template>
  <div 
    class="py-30 border-bottom"
  >
    <div class="mt-20 text-grey">
      <div v-if="state === 'view'">
        {{note.text}}
      </div>
      <div v-else-if="state === 'edit'">
        <textarea
          class="underline-input w-100 bg-grey-light-2 p-4 br-20"
          spellcheck="false"
          v-model="newText"
        ></textarea>
      </div>
    </div>
    <div
      class="row no-gutters justify-content-end mt-3"
    >
      <div v-if="state === 'view'">
        <a href="#" class="text-orange mr-25">Delete</a>
        <a 
          href="#" 
          class="text-orange"
          @click.prevent="onEdit"
        >
          Edit
        </a>
      </div>
      <div v-else-if="state === 'edit'">
        <button 
          class="button-primary"
          @click="saveNoteTask.run()"
          :disabled="saveNoteTask.isActive"
        >
          {{saveNoteTask.isActive ? 'Saving' : 'Save'}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import NoteRepository from '@/repositories/notes';

export default Vue.extend({
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      state: 'view',
      newText: this.note.text
    }
  },
  tasks(t) {
    return {
      saveNoteTask: t(async () => {
        const note = await NoteRepository.update(this.note.id, {
          text: this.newText
        })
        this.note = note
        this.state = 'view'
      })
    }
  },
  methods: {
    onEdit() {
      this.state = 'edit'
    }
  }
})
</script>
