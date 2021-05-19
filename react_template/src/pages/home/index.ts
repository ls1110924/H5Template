import { connect } from 'react-redux'
import { HomePage } from './page'
import { HOME_ACTIONS } from '../../stores/actions'
import { RootState } from '../../stores/reducers'

const mapStateToProps = (state: RootState) => {
  const home = state.home

  return {
    name: home.get('name')
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    modifyName: (name: string) => {
      dispatch(HOME_ACTIONS.modifyName(name))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
