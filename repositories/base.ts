import { NuxtAxiosInstance } from "@nuxtjs/axios";

export interface QueryParams {
  filter?: object,
  include?: object
}

export class BaseRepository<T> {
  private _axios?: NuxtAxiosInstance;
  private _modelName?: string;
  private _namespace?: string;

  constructor() {
    Object
      .getOwnPropertyNames(BaseRepository.prototype)
      .filter(method => !['constructor', 'register', 'checkRegistered'].includes(method))
      .filter(method => typeof this[method] === 'function')
      .map(method => {
        const func = this[method].bind(this);
        this[method] = (...args) => {
          this.checkRegistered();
          return func(...args);
        }
      })
  }

  register(axios, modelName, namespace = '') {
    this._axios = axios;
    this._modelName = modelName;
    this._namespace = namespace;
  }

  buildUrl(url: string = '') {
    return `${this._namespace}/${this._modelName}/${url}`
  }

  get axios() {
    return this._axios;
  }

  get modelName() {
    return this._modelName;
  }

  private checkRegistered() {
    if (!this.axios) {
      throw new Error(`
        Error: Axios instance not initialized for the repository
      `);
    }

    if (!this.modelName) {
      throw new Error(`
        Error: Model name not set for the repository
      `);
    }
  }

  async fetchAll(params: QueryParams = {}): Promise<T> {
    const response = await this.axios!.$get(this.buildUrl(), {
      params
    });
    const modelObj = response.data;
    if (response.meta) {
      modelObj.meta = response.meta
    }

    return modelObj;
  }

  async fetchById(id: number, params: QueryParams = {}): Promise<T> {
    const response = await this.axios!.$get(this.buildUrl(id.toString()), {
      params
    });
    const modelObj = response.data;
    if (response.meta) {
      modelObj.meta = response.meta
    }

    return modelObj;
  }

  async create(obj: T): Promise<T> {
    const response = await this.axios!.$post(this.buildUrl(), obj);
    const modelObj = response.data;
    if (response.meta) {
      modelObj.meta = response.meta
    }

    return modelObj;
  }

  async update(id: number, obj: T): Promise<T> {
    const response = await this.axios!.$patch(this.buildUrl(id.toString()), obj);
    const modelObj = response.data;
    if (response.meta) {
      modelObj.meta = response.meta
    }

    return modelObj;
  }
}