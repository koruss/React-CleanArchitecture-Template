import { type IUserRepository } from '../Domain/IUserRepository'

export class UserMock implements IUserRepository {
  login (email: string, password: string): boolean {
    return (email === 'h@g.com' && password === '1234')
  }
}
