import { BaseRepository } from "@/repositories/base";

export interface Tags {
  id: number;
  title: string;
}

class TagRepository extends BaseRepository<Tags> {}

export default new TagRepository();
