import { type UseBoundStore, type StoreApi, create } from 'zustand'
import { type IStoreState, type IStore } from '../../Domain/IStore'

export class ZustandStore implements IStore {
  store: UseBoundStore<StoreApi<IStoreState>>

  constructor () {
    this.store = create<IStoreState>(
      (set) => (
        {
          username: '',
          updateUsername: (value: string) => { set(() => ({ username: value })) }
        }
      )
    )
  }
}
