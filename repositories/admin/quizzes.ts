import { BaseRepository } from "@/repositories/base";

export interface Quiz {
  id: number;
  hbContentId: string;
}

class QuizRepository extends BaseRepository<Quiz> {}

export default new QuizRepository();
