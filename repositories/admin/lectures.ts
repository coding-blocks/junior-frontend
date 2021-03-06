import { BaseRepository,QueryParams } from "@/repositories/base";
import { Resource } from './resources';

type LectureType = 'ytlive' | 'zoom_meeting';

export interface Lecture {
  id: number;
  title: string;
  thubmnail: string;
  type: LectureType;
  start_time:string;
}

class LectureRepository extends BaseRepository<Lecture> {

  async fetchResources(id: string, params: QueryParams = {}): Promise<Resource[]> {
    const resources = await this.axios!.$get(this.buildUrl(`${id}/relationship/resources`), {
      params
    });
    return resources.data;
  } 

  async addResource(obj:Object): Promise<Resource[]> {
    const resources = await this.axios!.$post(`admin/lecture-resources`, obj);
    return resources.data;
  }

  async removeResource(lectureId: string, resourceId: string): Promise<Resource[]> {
    const resources = await this.axios!.$delete(`admin/lecture-resources/`, {
      params: {
        lectureId,
        resourceId
      }
    });
    return resources.data;
  }
}

export default new LectureRepository();
