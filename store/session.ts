import { Module, MutationAction, VuexModule } from 'vuex-module-decorators';
import UserRepository, { User } from '~/repositories/users';

@Module({
  name: 'session',
  stateFactory: true,
  namespaced: true
})
export default class SessionModule extends VuexModule {
  user: User | null = null;

  @MutationAction({ mutate: ['user'] })
  async fetchCurrentUser() {
    try {
      const user = await UserRepository.fetchMe();
      return {
        user
      };
    } catch (err) {
      return {
        user: null
      }
    }
  }
}
