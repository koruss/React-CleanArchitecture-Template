import axios, { type AxiosInstance } from 'axios'
import { type IUserRepository } from '../Domain/IUserRepository'

export class UserAxiosRepository implements IUserRepository {
  baseUrl: 'string | undefined'
  instance: AxiosInstance
  constructor () {
    this.baseUrl = import.meta.env.VITE_BACKEND_URL
    this.instance = axios.create({
      baseURL: this.baseUrl
    })
  }

  async login (email: string, password: string): Promise<boolean> {
    const result = await this.instance.post(
      '/users/login',
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    ).then(
      (res) => {
        return res.data.message === 'Success'
      }
    ).catch(
      (err) => {
        console.log(err)
        return false
      }
    )
    return result
  }
}
