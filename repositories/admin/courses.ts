import { BaseRepository } from '@/repositories/base';
import { Batch } from './batches';

export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  syllabus: object;
}

class CourseRepository extends BaseRepository<Course> {

  async fetchBatches(id: string): Promise<Array<Batch>> {
    const batches = await this.axios!.$get(this.buildUrl(`${id}/relationship/batches`))
    return batches.data;
  }

}

export default new CourseRepository();
