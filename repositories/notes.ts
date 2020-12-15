import { BaseRepository } from './base';

export interface Note {
  id: number;
  text: string;
  lectureId: number;
}

class NotesRepository extends BaseRepository<Note> {}

export default new NotesRepository();
