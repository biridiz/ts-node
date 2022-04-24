import { HelloWorld as HelloWorldDataBase } from './db'

export interface RepositoryInterface {
  create(data: object): Promise<void>
}

export class Repository implements RepositoryInterface {
  public async create(data: object): Promise<void> {
    await HelloWorldDataBase.create(data)
  }
}