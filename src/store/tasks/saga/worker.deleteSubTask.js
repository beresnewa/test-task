import { call, put, select } from 'redux-saga/effects'
import { deleteSubtask } from 'api/subTasks'
import { getTaskIndex } from 'utils/helpers'
import * as tasksActions from '../actions'
import * as tasksSelectors from '../selectors'

export default function* deleteSubTaskWorker({ payload }) {
  try {
    yield put(tasksActions.startLoading())

    const { subTaskId, taskId } = payload
    const tasks = yield select(tasksSelectors.tasksList)
    const taskIndex = getTaskIndex(tasks, taskId)
    const subTasks = tasks[taskIndex].subTasks?.filter(subTask => subTask.id !== subTaskId)

    yield call(deleteSubtask, subTaskId)

    yield put(tasksActions.deleteSubTaskSuccess({ taskIndex, subTasks }))
    yield put(tasksActions.updateLabels())
  } catch {
    yield put(tasksActions.showError('Deleting subTask error'))
  }
}
