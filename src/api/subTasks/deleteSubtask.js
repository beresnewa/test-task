import Storage from 'utils/storage'
import delay from 'utils/delay'

export default delay(subTaskId => {
  const tasks = Storage.tasks.get()
  const subTasks = Storage.subTasks.get()
  // here was a little mistake, line that was here:
  // const subTask = subTasks.find(st => st.id !== subTaskId)
  const subTask = subTasks.find(st => st.id === subTaskId)
  const filteredSubTasks = subTasks.filter(st => st.id !== subTaskId)
  const isLastSubTask = !filteredSubTasks.filter(st => st.taskId === subTask.taskId).length

  if (subTask) {
    Storage.subTasks.set(filteredSubTasks)
    
    // I've improved api a bit by adding deletion of task when deleting last subTask
    if (isLastSubTask) {
      Storage.tasks.set(tasks.filter(t => t.id !== subTask.taskId))
    }
    
    return subTask
  }

  throw new Error(`SubTask [${subTaskId}] not found`)
})
