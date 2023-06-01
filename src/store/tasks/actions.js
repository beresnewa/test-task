import { createAction } from '@reduxjs/toolkit'
import tasksSlice from './slice'

export const {
  startLoading,
  stopLoading,
  setError,
  fetchTasksSuccess,
  createTaskSuccess,
  fetchSubTasksSuccess,
  deleteSubTaskSuccess,
  setLabels,
  setActiveLabels,
  setSearch,
  setAppliedSearch,
  setSort,
  resetFilters
} = tasksSlice.actions

export const fetchTasks = createAction('tasks/fetchTasks')
export const createTask = createAction('tasks/createTask')
export const showError = createAction('tasks/showError')
export const fetchSubTasks = createAction('tasks/fetchSubTasks')
export const deleteSubTask = createAction('tasks/deleteSubTask')
export const updateLabels = createAction('tasks/updateLabels')
export const toggleActiveLabel = createAction('tasks/toggleActiveLabel')
