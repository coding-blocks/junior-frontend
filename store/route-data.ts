import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  name: 'route-data',
  stateFactory: true,
  namespaced: true
})
export default class RouteDataModule extends VuexModule {
  routeDataMap = {};

  @Mutation
  cacheRouteData({ routeName, data }) {
    this.routeDataMap[routeName] = data
  }
}
