import { BaseRepository } from "@/repositories/base";

type LectureType = 'ytlive' | 'zoom_meeting';

export interface Lecture {
  id: number;
  title: string;
  thubmnail: string;
  type: LectureType;
  start_time:string;
}

class LectureRepository extends BaseRepository<Lecture> {}

export default new LectureRepository();
