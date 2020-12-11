import { BaseRepository } from '@/repositories/base';

export interface YoutubeLive {
  id: number;
  video_id: string;
  duration?: number;
  description?: string;
}

class YoutubeLiveRepository extends BaseRepository<YoutubeLive> {}

export default new YoutubeLiveRepository();
