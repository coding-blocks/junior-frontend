import { BaseRepository } from "./base";

type ResourceType = 'pdf' | 'quiz' | 'hb_content';

export interface Resource {
  id: number;
  title: string;
  type: ResourceType;
}

class ResourceRepository extends BaseRepository<Resource> {
  // create interface for hackerblocks content
  async fetchResourceTypePayload(id: number, courseId: number): Promise<object> {
    const payload = await this.axios!.$get(this.buildUrl(`${id}/payload`), {
      params: {
        courseId
      }
    })
    return payload.data
  }
}

export default new ResourceRepository();
