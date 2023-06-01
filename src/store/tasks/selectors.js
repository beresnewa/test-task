import { createSelector } from '@reduxjs/toolkit';
import memoize from 'lodash/memoize'
import { filterTasks, sortTasks } from 'utils/helpers'

const tasksState = ({ tasks }) => tasks

export const isLoading = createSelector(tasksState, ({ isLoading: loading }) => loading)
export const errorText = createSelector(tasksState, ({ error }) => error)
export const tasksList = createSelector(tasksState, ({ tasks }) => tasks)
export const subTasksList = createSelector(
  tasksList,
  tasks => memoize(taskId => tasks.find(task => task.id === taskId).subTasks || [])
)
export const allLabels = createSelector(tasksState, ({ labels }) => labels)
export const activeLabels = createSelector(tasksState, ({ activeLabels: labels }) => labels)
export const searchValue = createSelector(tasksState, ({ search }) => search)
export const appliedSearchValue = createSelector(tasksState, ({ appliedSearch }) => appliedSearch)
export const sortValue = createSelector(tasksState, ({ sort }) => sort)
export const filteredTasks = createSelector([tasksList, appliedSearchValue, activeLabels], filterTasks)
export const sortedTasks = createSelector([filteredTasks, sortValue], sortTasks)
export const filteredSubTasksList = createSelector(
  filteredTasks,
  tasks => memoize(taskId => tasks.find(task => task.id === taskId).subTasks || [])
)
