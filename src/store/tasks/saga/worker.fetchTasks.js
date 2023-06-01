import { call, put } from 'redux-saga/effects'
import { fetchTasks } from 'api/tasks'
import * as tasksActions from '../actions'

export default function* fetchTasksWorker() {
  try {
    yield put(tasksActions.startLoading())

    const tasks = yield call(fetchTasks)

    yield put(tasksActions.fetchTasksSuccess(tasks))
  } catch {
    yield put(tasksActions.showError('Fetching tasks error'))
  }
}
