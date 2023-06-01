const titleIncludesSearch = (title, search) => title.toLowerCase().includes(search.toLowerCase())

export default (tasks, search, activeLabels) => {
  if (search || activeLabels.length) {
    return tasks.map(task => {
      const subTasks = (task.subTasks || []).filter(subTask => {
        const matchedTitle = search 
          ? titleIncludesSearch(subTask.title, search)
          : true
        const matchedLabels = activeLabels.length
          ? subTask.labels.some(l => activeLabels.includes(l))
          : true
  
        return matchedTitle && matchedLabels
      })

      return({ ...task, subTasks })
    }).filter(task => {
      const matchedTaskTitle = search
        ? titleIncludesSearch(task.title, search)
        : false

      return matchedTaskTitle || task.subTasks.length
    })
  }

  return tasks
}
