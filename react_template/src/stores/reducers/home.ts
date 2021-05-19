import { handleActions } from 'redux-actions'
import { Record } from 'immutable'
import { isNull, trim } from '../../utils'

interface HomeStateData {
  name: string
}

export type HomeState = Record<HomeStateData>

export const INIT_HOME_STATE = Record({
  name: '123456'
})()

export default handleActions({

  ['home/updateName']: (state, action) => {
    const name = action && action.payload ? action.payload.name : null
    if (isNull(name)) {
      return state
    }
    return state.set('name', trim(name))
  }
}, INIT_HOME_STATE)
