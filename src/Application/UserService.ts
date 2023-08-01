import { type IUserRepository } from '../Domain/IUserRepository'
import { type UserDTO } from './UserDTO'

export class UserService {
  userRepository: IUserRepository

  constructor (pUserRepository: IUserRepository) {
    this.userRepository = pUserRepository
  }

  async login (userDTO: UserDTO): Promise<boolean> {
    return await this.userRepository.login(userDTO.email, userDTO.password)
  }
}
