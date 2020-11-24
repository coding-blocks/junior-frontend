import { BaseRepository } from '@/repositories/base';

export type LectureType = 'zoom' | 'youtube';

export interface Lecture {
  id: number;
  title: string;
  type: LectureType;
  start_time: string;
}

class LectureRepository extends BaseRepository<Lecture> {}

export default new LectureRepository();
