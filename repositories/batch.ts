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
