import { BaseRepository } from '@/repositories/base';

export interface User {
  id: number;
  oneauth_id: string;
  name: string;
  email: string;
  username: string;
  role: string;
}

class UserRepository extends BaseRepository<User> {
  async fetchMe(): Promise<User> {
    const response = await this.axios!.$get(`${this.modelName}/me`);
    return response.data;
  }
}

export default new UserRepository();