import { BaseRepository } from "@/repositories/base";

type ResourceType = 'pdf' | 'quiz' | 'hb_content';

export interface Resource {
  id: number;
  title: string;
  type: ResourceType;
  //document?: DocumentAttributes;
  //quiz?: QuizAttributes;
  //video?: VideoAttributes;
  //hb_content?: HBContentAttributes
}

class ResourceRepository extends BaseRepository<Resource> {}

export default new ResourceRepository();
