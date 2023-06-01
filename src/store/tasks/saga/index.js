import { all, takeEvery, takeLatest } from 'redux-saga/effects'
import * as tasksActions from '../actions';
import fetchTasksWorker from './worker.fetchTasks'
import createTaskWorker from './worker.createTask'
import showErrorWorker from './worker.showError'
import fetchSubTasksWorker from './worker.fetchSubTasks'
import deleteSubTaskWorker from './worker.deleteSubTask'
import updateLabelsWorker from './worker.updateLabels'
import toggleActiveLabelWorker from './worker.toggleActiveLabel'

export default function* tasksWatcher() {
  yield all([
    fetchTasksWorker(),
    yield takeEvery(tasksActions.createTask, createTaskWorker),
    yield takeLatest(tasksActions.showError, showErrorWorker),
    yield takeLatest(tasksActions.fetchSubTasks, fetchSubTasksWorker),
    yield takeLatest(tasksActions.deleteSubTask, deleteSubTaskWorker),
    yield takeLatest(tasksActions.updateLabels, updateLabelsWorker),
    yield takeEvery(tasksActions.toggleActiveLabel, toggleActiveLabelWorker)
  ])
}
