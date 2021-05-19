import { combineReducers } from 'redux'
import homeReducers, { HomeState } from './home'

export interface RootState {
    home: HomeState
}

export default combineReducers({
    home: homeReducers
})
