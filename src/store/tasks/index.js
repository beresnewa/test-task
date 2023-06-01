import * as selectors from './selectors'
import * as actions from './actions'
import slice from './slice'
import saga from './saga'

const { reducer } = slice

export {
  selectors,
  actions,
  reducer,
  saga
}
