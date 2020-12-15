import { BaseRepository, QueryParams } from '@/repositories/base';
import { BatchAttempt } from './batch-attempt';
import { Batch } from './batches';
import { CourseFeature } from './course-features';
import { CourseProject } from './course-projects';
import { Resource } from './resources';

export type CourseClassTag = '1-3' | '4-6' | '7-9' | '10-12';

export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  syllabus: object;
  classTag: CourseClassTag;
  isRecommended: boolean;
  courseFeatures: CourseFeature[];
  courseProjects: CourseProject[];
}

class CourseRepository extends BaseRepository<Course> {
  async fetchResources(id: number, params: QueryParams = {}): Promise<Resource[]> {
    const resources = await this.axios!.$get(this.buildUrl(`${id}/relationship/resources`), {
      params
    });
    return resources.data;
  }

  async fetchBatches(id: number, params: QueryParams = {}): Promise<Batch> {
    const batches = await this.axios!.$get(this.buildUrl(`${id}/relationship/batches`), {
      params
    });
    return batches.data;
  }

  async fetchCurrentBatchAttempt(id: number): Promise<BatchAttempt> {
    const currentBatchAttempt = await this.axios!.$get(this.buildUrl(`${id}/current-batch-attempt`));
    return currentBatchAttempt.data;
  }

  async fetchEnrolledCourses(): Promise<Course[]> {
    const courses = await this.axios!.$get(this.buildUrl('enrolled-courses'));
    return courses.data
  }
}

export default new CourseRepository();
