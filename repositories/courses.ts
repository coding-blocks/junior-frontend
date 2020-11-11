import { BaseRepository } from '@/repositories/base';

export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  syllabus: object;
}

class CourseRepository extends BaseRepository<Course> {}

export default new CourseRepository();
