import HelloWorld from './hello'
import { RepositoryInterface } from './repository'

class MockRepository implements RepositoryInterface {
  public async create(data: object): Promise<void> {
    console.log(data)
  }
}

test('it should be ok', () => {
  expect(new HelloWorld(new MockRepository)).toBeTruthy()
  expect(new HelloWorld(new MockRepository)).toBeInstanceOf(HelloWorld)
})