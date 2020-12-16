import { BaseRepository } from './base';
import { BatchAttempt } from './batch-attempt';
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
  hbContestId: number;
  maxSize: number;
}

class BatchesRepository extends BaseRepository<Batch> {
  async fetchCurrentLecture(id: number): Promise<Lecture> {
    const lecture = await this.axios!.$get(this.buildUrl(`${id}/current-lecture`));
    return lecture.data;
  }

  async fetchLectures(id: number): Promise<Lecture[]> {
    const lectures = await this.axios!.$get(this.buildUrl(`${id}/relationship/lectures`));
    return lectures.data;
  }

  async enrollInBatch(id: number): Promise<BatchAttempt> {
    const batchAttempt = await this.axios!.$post(this.buildUrl(`${id}/enroll`));
    return batchAttempt.data;
  }
}

export default new BatchesRepository();
