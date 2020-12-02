import { BaseRepository } from './base';

export interface ZoomMeeting {
  id: number;
  topic: string;
  agenda: string;
  start_time: string;
  duration: number;
  webinar_id: string;
  zoomAccountId: number;
}

class ZoomMeetingRepository extends BaseRepository<ZoomMeeting> {
  async fetchMeetingSignature(id: number): Promise<{ signature: string }> {
    const signature = await this.axios!.$post(this.buildUrl(`${id}/signature`))
    return signature.data;
  }
}

export default new ZoomMeetingRepository();
