import { put, select } from 'redux-saga/effects'
import { gatherLabels, removeDuplicates } from 'utils/helpers'
import * as tasksActions from '../actions'
import * as tasksSelectors from '../selectors'

export default function* updateLabelsWorker() {
  const activeLabels = yield select(tasksSelectors.activeLabels)
  const tasks = yield select(tasksSelectors.tasksList)

  const allSubTasks = tasks.reduce((result, { subTasks }) => [...result, ...(subTasks || [])], [])
  const updatedLabels = removeDuplicates(gatherLabels(allSubTasks))
  const updatedActiveLabels = activeLabels.filter(al => updatedLabels.includes(al))

  yield put(tasksActions.setLabels(updatedLabels))
  yield put(tasksActions.setActiveLabels(updatedActiveLabels))
}
