import { BaseRepository } from "@/repositories/base";

export interface ProjectChallenge {
  id: number;
  hbContentId: string;
}

class ProjectChallengeRepository extends BaseRepository<ProjectChallenge> {}

export default new ProjectChallengeRepository();
