import { BaseRepository } from '@/repositories/base';
import { Resource } from './resources';

export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  syllabus: object;
}

class CourseRepository extends BaseRepository<Course> {
  async fetchResources(id: number): Promise<Resource> {
    const resources = await this.axios!.$get(this.buildUrl(`${id}/relationship/resources`))
    return resources.data;
  }
}

export default new CourseRepository();
