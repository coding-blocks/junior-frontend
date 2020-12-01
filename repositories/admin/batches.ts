import { BaseRepository } from '@/repositories/base';
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

class BatchesRepository extends BaseRepository<Batch> {}

export default new BatchesRepository();
