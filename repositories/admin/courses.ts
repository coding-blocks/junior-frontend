import { BaseRepository,QueryParams } from '@/repositories/base';
import { Batch } from './batches';
import { Resource } from './resources';

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

  async fetchResources(id: string, params: QueryParams = {}): Promise<Resource[]> {
    const resources = await this.axios!.$get(this.buildUrl(`${id}/relationship/resources`), {
      params
    });
    return resources.data;
  } 

  async addResource(id: string, obj:Object): Promise<Resource[]> {
    const resources = await this.axios!.$post(this.buildUrl(`${id}/relationship/resources`), obj);
    return resources.data;
  }

  async removeResource(id: string, obj:Object): Promise<Resource[]> {
    const resources = await this.axios!.$delete(this.buildUrl(`${id}/relationship/resources`), obj);
    return resources.data;
  }
}

export default new CourseRepository();
