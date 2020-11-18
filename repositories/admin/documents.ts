import { BaseRepository } from "@/repositories/base";

export interface Document {
  id: number;
  pdf_link: string;
}

class DocumentRepository extends BaseRepository<Document> {}

export default new DocumentRepository();
