import { BaseRepository } from '@/repositories/base';

export interface ZoomMeeting {
  id: number;
  topic: string;
  agenda: string;
  start_time: string;
  duration: number;
  webinar_id: string;
  zoomAccountId: number;
}

class ZoomMeetingRepository extends BaseRepository<ZoomMeeting> {}

export default new ZoomMeetingRepository();
