import { RepositoryInterface } from './repository';

interface HelloWorldInterface {
  text: string
  create() : void
}

class HelloWorld implements HelloWorldInterface {
  text: string
  repository: RepositoryInterface

  public constructor (repository: RepositoryInterface) {
    this.repository = repository
    this.text = "Hello World"
    this.create()
  }

  public create () {
    this.repository.create({ text: this.text })
  }
}

export default HelloWorld