export interface IUserRepository {
  login: (email: string, password: string) => Promise<boolean> | boolean // to manage async and sync
}
