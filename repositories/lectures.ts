import { BaseRepository } from '@/repositories/base';

export type LectureType = 'zoom' | 'youtube';

export interface Lecture {
  id: number;
  title: string;
  type: LectureType;
  start_time: string;
}

class LectureRepository extends BaseRepository<Lecture> {
  async fetchUpcomingLectures(): Promise<Lecture[]> {
    const lectures = await this.axios!.$get(this.buildUrl('upcoming-lectures'));
    return lectures.data;
  }
}

export default new LectureRepository();
