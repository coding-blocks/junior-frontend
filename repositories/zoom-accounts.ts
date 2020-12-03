import { BaseRepository } from './base';

export interface ZoomAccount {
  id: number;
  zoom_id: string;
  api_key: string;
  api_secret: string;
}

class ZoomAccountRepository extends BaseRepository<ZoomAccount> {}

export default new ZoomAccountRepository();
