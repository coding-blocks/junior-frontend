import { BaseRepository } from "@/repositories/base";

export interface CodeChallenge {
  id: number;
  hbContentId: string;
}

class CodeChallengeRepository extends BaseRepository<CodeChallenge> {}

export default new CodeChallengeRepository();
