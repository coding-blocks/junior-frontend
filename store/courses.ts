import { Module } from 'vuex-module-decorators';
import { BaseVuexModule } from '~/utils/store';

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
export default class CoursesModule extends BaseVuexModule<Course> {
  _modelName: string = 'courses';
}
