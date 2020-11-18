import { BaseRepository } from "@/repositories/base";
import { Document } from '@/repositories/admin/documents';

type ResourceType = 'pdf' | 'quiz' | 'hb_content';

export interface Resource {
  id: number;
  title: string;
  type: ResourceType;
  document?: Document;
  //quiz?: QuizAttributes;
  //video?: VideoAttributes;
  //hb_content?: HBContentAttributes
}

class ResourceRepository extends BaseRepository<Resource> {}

export default new ResourceRepository();
