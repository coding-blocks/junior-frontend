import { BaseRepository } from '@/repositories/base';
import { BatchAttempt } from './batch-attempt';
import { CourseFeature } from './course-features';
import { Resource } from './resources';

export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  syllabus: object;
  courseFeatures: CourseFeature;
}

class CourseRepository extends BaseRepository<Course> {
  async fetchResources(id: number): Promise<Resource> {
    const resources = await this.axios!.$get(this.buildUrl(`${id}/relationship/resources`))
    return resources.data;
  }

  async fetchCurrentBatchAttempt(id: number): Promise<BatchAttempt> {
    const currentBatchAttempt = await this.axios!.$get(this.buildUrl(`${id}/current-batch-attempt`))
    return currentBatchAttempt.data;
  }
}

export default new CourseRepository();
