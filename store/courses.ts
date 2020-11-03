import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import { listToMap } from '~/utils/store';

export interface Course {
  id: number;
  title: string;
  description: string;
  slug: string;
  syllabus: object;
}

@Module({
  name: 'courses',
  stateFactory: true,
  namespaced: true,
})
export default class CoursesModule extends VuexModule {
  courseMap: {[key: number]: Course} = {};

  @MutationAction({ mutate: ['courseMap'] })
  async fetchAll() {
    const response = await $axios.$get('courses');
    return {
      courseMap: {
        ...this.courseMap,
        ...listToMap(response.data, 'id')
      }
    }
  }

  get courses() {
    return Object.values(this.courseMap);
  }
}
