import { Container } from 'typedi'
import { UserService } from './Application/UserService'
import { type IUserRepository } from './Domain/IUserRepository'
// import { UserMock } from './Infrastructure/UserMock'
import { UserAxiosRepository } from './Infrastructure/UserAxios'

export class UserDI {
  UserService: UserService | undefined

  public createContainer (): void {
    // Instatiating the DI container and object that will be injected
    const container = Container.of('user')// DI container type
    const repository: IUserRepository = new UserAxiosRepository() // define for the port which adapter will be used
    // const repository: IUserRepository = new UserMock() // define for the port which adapter will be used
    const service = new UserService(repository)
    // SetUp the DI container
    container.set('UserService', service)
    container.set('UserRepository', repository)
    this.UserService = service
  }
}
