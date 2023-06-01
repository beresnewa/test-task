import { call, put, select } from 'redux-saga/effects'
import { fetchSubTasks } from 'api/subTasks'
import { gatherLabels, removeDuplicates, getTaskIndex } from 'utils/helpers'
import * as tasksActions from '../actions'
import * as tasksSelectors from '../selectors'

export default function* fetchSubTasksWorker({ payload: taskId }) {
  try {
    const tasks = yield select(tasksSelectors.tasksList)
    const labels = yield select(tasksSelectors.allLabels)
    const subTasks = yield call(fetchSubTasks, taskId)
    const taskIndex = getTaskIndex(tasks, taskId)
    const allLabels = removeDuplicates([...labels, ...gatherLabels(subTasks)])

    yield put(tasksActions.fetchSubTasksSuccess({ taskIndex, subTasks }))
    yield put(tasksActions.setLabels(allLabels))
  } catch {
    yield put(tasksActions.showError('Fetching subTasks error'))
  }
}
