import { put, select } from 'redux-saga/effects'
import * as tasksActions from '../actions'
import * as tasksSelectors from '../selectors'

export default function* toggleActiveLabelWorker({ payload }) {
  const activeLabels = yield select(tasksSelectors.activeLabels)
  const updatedActiveLabels = activeLabels.includes(payload)
    ? activeLabels.filter(label => label !== payload)
    : [...activeLabels, payload]

  yield put(tasksActions.setActiveLabels(updatedActiveLabels))
}
