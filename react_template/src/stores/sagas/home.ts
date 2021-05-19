import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { HOME_ACTIONS } from '../actions'
import { RootState } from '../reducers'

function* handleModifyName(action: any) {
  try {
    // @ts-ignore
    const state = yield select() as RootState
    const { name } = action.payload
    const home = state.home
    if (home.get('name') === name) {
      // 已经替换成功，则跳过
      return
    }

    yield put(HOME_ACTIONS.updateName(name))
  } catch (e) {
    // do nothing
  }
}

function* rootSaga() {
  yield all([
    takeLatest('home/modifyName', handleModifyName),
  ])
}

export default rootSaga
