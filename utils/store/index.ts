import { MutationAction, VuexModule } from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import { listToMap } from "./helpers";

export interface ModuleState<T> {
  objectMap: T;
  _modelName: string;
}

export class BaseVuexModule<T, S extends ModuleState<T> = ModuleState<T>, R = any> extends VuexModule<S, R> {
  objectMap: {[key: number]: T} = {};
  _modelName: string = 'base';

  getModuleName() {
    return (this.constructor as any)._vmdModuleName;
  }

  @MutationAction({ mutate: ['objectMap'] })
  async fetchAll(replace: boolean = false) {
    let oldState: S | undefined;
    if (this.state instanceof Function) {
      oldState = this.state();
    } else {
      oldState = this.state;
    }

    const response = await $axios.$get(`${oldState?._modelName}`);

    return {
      objectMap: {
        ...(replace ? {} : oldState?.objectMap),
        ...listToMap(response.data, 'id')
      }
    }
  }

  @MutationAction({ mutate: ['objectMap'] })
  async fetchById(id: number) {
    let oldState: S | undefined;
    if (this.state instanceof Function) {
      oldState = this.state();
    } else {
      oldState = this.state;
    }

    const response = await $axios.get(`${oldState?._modelName}/${id}`)
    const object = response.data;
    
    return {
      objectMap: {
        ...oldState?.objectMap,
        [object.id]: object
      }
    }
  }

  get list() {
    return Object.values(this.objectMap);
  }

  get getById() {
    return id => this.objectMap[id];
  }
}
