import { BaseRepository } from './base';

export interface CounsellingBooking {
  id?: number;
  name: string;
  mobile: string;
}

class CounsellingBookingRepository extends BaseRepository<CounsellingBooking> {}

export default new CounsellingBookingRepository();
