import { BaseRepository,QueryParams } from '@/repositories/base';
import { Batch } from './batches';
import { Resource } from './resources';

export type CourseClassTag = '1-3' | '4-6' | '7-9' | '10-12'; 

export interface Course {
  id: number;
  title: string;
  logo: string;
  thumbnail: string;
  description: string;
  slug: string;
  syllabus: object;
  classTag: CourseClassTag;
  isRecommended: boolean;
  backgroundTheme: string;
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
  
  async updateFeatures(id: string, obj:Object,params: QueryParams = {}): Promise<Resource[]> {
    const features = await this.axios!.$put(this.buildUrl(`${id}/relationship/features`),obj, {
      params
    });
    return features.data;
  } 

  async updateTags(id: string, obj:Object): Promise<Resource[]> {
    const tags = await this.axios!.$post(this.buildUrl(`${id}/relationship/tags`), obj);
    return tags.data;
  } 

  async addResource(obj:Object): Promise<Resource[]> {
    const resources = await this.axios!.$post(`admin/course-resources`, obj);
    return resources.data;
  }

  async removeResource(courseId: string, resourceId: string): Promise<Resource[]> {
    const resources = await this.axios!.$delete(`admin/course-resources/`, {
      params: {
        courseId,
        resourceId
      }
    });
    return resources.data;
  }
}

export default new CourseRepository();
