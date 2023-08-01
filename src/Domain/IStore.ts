export interface IStoreState {
  username: string
  updateUsername: (value: string) => void

}

export interface IStore {
  store: unknown
}
