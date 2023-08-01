import { shallow } from 'zustand/shallow'
import { ZustandStore } from './ZustandStore'
import { type IStoreState } from '../../Domain/IStore'

const zustandStore = new ZustandStore()

export const StoreFacade = (): IStoreState => {
  const { username, updateUsername } = zustandStore.store(
    (state) => ({
      username: state.username,
      updateUsername: state.updateUsername
    }),
    shallow
  )
  return { username, updateUsername }
}
