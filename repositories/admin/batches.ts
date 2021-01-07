import { BaseRepository } from '@/repositories/base';
import { Lecture } from './lectures';
import { Instructor } from './instructors';
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
  acceptingAdmission: boolean;
}

class BatchesRepository extends BaseRepository<Batch> {
  async fetchLectures(id: number): Promise<Lecture[]> {
    const lectures = await this.axios!.$get(this.buildUrl(`${id}/relationship/lectures`));
    return lectures.data
  }

  async updateInstructors(id: string, obj:Object): Promise<Instructor[]> {
    const instructors = await this.axios!.$post(this.buildUrl(`${id}/relationship/instructors`), obj);
    return instructors.data;
  } 
}

export default new BatchesRepository();
