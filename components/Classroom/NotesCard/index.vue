<template>
  <div class="card pt-none" style="max-height: 750px">
    <div class="flex-col h-100">
      <div class="w-100 bg-white mb-10 pt-30">
        <div class="heading-6 bold mb-20">Take Notes</div>
        <div class="bg-grey-light-3 card">
          <div class="row no-gutters align-items-center">
            <div class="flex-1 pr-20 d-sm-block d-none">
              <div class="row no-gutters align-items-center">
                <div class="round s-40x40 mr-20">
                  <img
                    :src="user.photo"
                  />
                </div>
                <div class="flex-1">
                  <textarea
                    placeholder="Add a Note"
                    class="underline-input w-100"
                    spellcheck="false"
                    style="background-color: transparent"
                    v-model="newNoteContent"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-12 mb-25 d-sm-none d-block">
              <div class="row no-gutters align-items-center">
                <div class="round s-40x40 mr-20">
                  <img
                    :src="user.photo"
                  />
                </div>
                <div class="flex-1">
                  <textarea
                    placeholder="Add a Note"
                    class="underline-input w-100"
                    spellcheck="false"
                    style="background-color: transparent"
                    v-model="newNoteContent"
                  ></textarea>
                </div>
              </div>
            </div>
            <button 
              class="button-primary"
              @click="saveNoteTask.run()"
              :disabled="saveNoteTask.isActive"
            >
              {{saveNoteTask.isActive ? 'Saving' : 'Save Note'}}
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-y-auto flex-1 w-100">
        <VAsync :task="fetchNoteTask">
          <template v-slot="{ value: notes }">
            <NoteItem 
              v-for="note in notes"
              :key="note.id"
              :note="note"
            />
          </template>
        </VAsync>
      </div>
    </div>
  </div>  
</template>
<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import NoteRepository from '@/repositories/notes';
import NoteItem from '@/components/Classroom/NotesCard/NoteItem.vue';
import VAsync from '@/components/Base/VAsync.vue';

export default Vue.extend({
  props: {
    lecture: {
      type: Object,
      required: true
    }
  },
  components: {
    VAsync,
    NoteItem
  },
  computed: {
    ...mapState('session', ['user'])
  },
  watch: {
    lecture() {
      this.fetchNoteTask.run();
    } 
  },
  data() {
    return {
      newNoteContent: ''
    }
  },
  tasks(t) {
    return {
      saveNoteTask: t(async () => {
        const note = this.newNoteContent.trim();
        if (!note) return;

        await NoteRepository.create({
          text: note,
          lectureId: this.lecture.id
        })
        this.newNoteContent = ''
        this.fetchNoteTask.run()
      }).flow('drop'),
      fetchNoteTask: t(async () => {
        return NoteRepository.fetchAll({
          filter: {
            lectureId: this.lecture.id
          },
          order: 'id'
        })
      }).flow('drop')
    }
  }
})
</script>
