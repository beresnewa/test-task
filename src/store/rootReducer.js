import { createBrowserHistory } from 'history'
import { combineReducers } from '@reduxjs/toolkit'
import { connectRouter } from 'connected-react-router'
import { reducer as tasks } from './tasks'

const history = createBrowserHistory()

const reducer = combineReducers({
  router: connectRouter(history),
  tasks
})

export { history }

export default reducer
