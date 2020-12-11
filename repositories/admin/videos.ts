import { BaseRepository } from "@/repositories/base";

export interface Video {
  id: number;
  video_id: string;
  duration?: number;
  description?: string;
}

class VideoRepository extends BaseRepository<Video> {}

export default new VideoRepository();
