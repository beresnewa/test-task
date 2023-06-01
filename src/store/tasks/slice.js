import { createSlice } from '@reduxjs/toolkit'
import { SORT_BY } from 'const'

const initialState = {
  tasks: [],
  isLoading: false,
  error: '',
  labels: [],
  activeLabels: [],
  search: '',
  appliedSearch: '',
  sort: SORT_BY.dateAsc
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
    },

    stopLoading(state) {
      state.isLoading = false
    },

    setError(state, { payload }) {
      state.error = payload
      state.isLoading = false
    },

    setLabels(state, { payload }) {
      state.labels = payload
    },

    setActiveLabels(state, { payload }) {
      state.activeLabels = payload
    },

    setSort(state, { payload }) {
      state.sort = payload
    },

    setSearch(state, { payload }) {
      state.search = payload
    },

    setAppliedSearch(state, { payload }) {
      state.appliedSearch = payload
    },

    resetFilters(state) {
      state.activeLabels = []
      state.search = ''
      state.appliedSearch = ''
    },

    fetchTasksSuccess(state, { payload }) {
      state.tasks = payload
      state.isLoading = false
    },

    createTaskSuccess(state, { payload }) {
      state.tasks.push(payload)
    },

    fetchSubTasksSuccess(state, { payload }) {
      const { taskIndex, subTasks } = payload

      state.tasks[taskIndex].subTasks = subTasks
    },

    deleteSubTaskSuccess(state, { payload }) {
      const { taskIndex, subTasks } = payload

      if (!subTasks.length) {
        state.tasks.splice(taskIndex, 1)
      } else {
        state.tasks[taskIndex].subTasks = subTasks
      }
      state.isLoading = false
    }
  }
})

export default tasksSlice
