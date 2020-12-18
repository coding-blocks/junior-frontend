import { NuxtAxiosInstance } from "@nuxtjs/axios";

class MinioRepository {
  private _axios?: NuxtAxiosInstance;
  private _modelName?: string;
  private _namespace?: string;

  constructor() {
    Object
      .getOwnPropertyNames(MinioRepository.prototype)
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

  private checkRegistered() {
    if (!this.axios) {
      throw new Error(`
        Error: Axios instance not initialized for the repository
      `);
    }
  }

  async fetchPresignedUrl(): Promise<{ url: string }> {
    const response = await this.axios!.$post(this.buildUrl('presignedUrl'), {});
    return response.data;
  }
}

export default new MinioRepository();
