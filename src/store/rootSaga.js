import { all } from 'redux-saga/effects'
import tasksWatcher from './tasks/saga'

export default function* () {
  yield all([tasksWatcher()])
}
