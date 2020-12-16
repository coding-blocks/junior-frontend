import { BaseRepository } from '@/repositories/base';
import { Resource } from './resources';

export type LectureType = 'zoom' | 'youtube';

export interface Lecture {
  id: number;
  title: string;
  thubmnail: string;
  type: LectureType;
  start_time: string;
}

class LectureRepository extends BaseRepository<Lecture> {
  async fetchUpcomingLectures(): Promise<Lecture[]> {
    const lectures = await this.axios!.$get(this.buildUrl('upcoming-lectures'));
    return lectures.data;
  }

  async fetchResources(lectureId: number): Promise<Resource[]> {
    const resources = await this.axios!.$get(this.buildUrl(`${lectureId}/relationship/resources`));
    return resources.data;
  }
}

export default new LectureRepository();
