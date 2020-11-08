import { NuxtAxiosInstance } from "@nuxtjs/axios";

export class BaseRepository<T> {
  private axios?: NuxtAxiosInstance;
  private modelName?: string;

  register(axios, modelName) {
    this.axios = axios;
    this.modelName = modelName;
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

  async fetchAll(): Promise<T> {
    this.checkRegistered();
    const response = await this.axios!.$get(this.modelName!);
    return response.data;
  }

  async fetchById(id: number): Promise<T> {
    this.checkRegistered();
    const response = await this.axios!.$get(`${this.modelName}/${id}`);
    return response.data;
  }

  async create(obj: T): Promise<T> {
    this.checkRegistered();
    const response = await this.axios!.$post(this.modelName!, obj);
    return response.data;
  }

  async update(id: number, obj: T): Promise<T> {
    this.checkRegistered();
    const response = await this.axios!.$patch(`${this.modelName}/${id}`, obj);
    return response.data;
  }
}