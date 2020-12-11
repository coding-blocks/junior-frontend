import { BaseRepository } from '@/repositories/base';
import { Lecture } from './lectures';
export type BatchType = 'free' | 'paid';

export interface Batch {
  id: number;
  title: string;
  type: BatchType;
  start: string;
  end: string;
  registrationStart: string;
  registrationEnd: string;
  maxSize: number;
}

class BatchesRepository extends BaseRepository<Batch> {
  async fetchLectures(id: number): Promise<Lecture[]> {
    const lectures = await this.axios!.$get(this.buildUrl(`${id}/relationship/lectures`));
    return lectures.data
  }
}

export default new BatchesRepository();
