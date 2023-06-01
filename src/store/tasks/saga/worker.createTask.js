import { call, put } from 'redux-saga/effects'
import { createTask } from 'api/tasks'
import * as tasksActions from '../actions'

export default function* createTaskWorker() {
  try {
    const task = yield call(createTask)

    yield put(tasksActions.createTaskSuccess(task))
  } catch {
    yield put(tasksActions.showError('Creating task error'))
  }
}
