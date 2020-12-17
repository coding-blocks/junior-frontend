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

  async addResource(id: string, obj:Object): Promise<Resource[]> {
    const resources = await this.axios!.$post(this.buildUrl(`${id}/relationship/resources`), obj);
    return resources.data;
  }

  async removeResource(id: string, obj:Object): Promise<Resource[]> {
    const resources = await this.axios!.$delete(this.buildUrl(`${id}/relationship/resources`), obj);
    return resources.data;
  }
}

export default new LectureRepository();
