import React from 'react'
import { useSelector } from 'react-redux'
import { NO_RESULTS_MSG } from 'const'
import { selectors as tasksSelectors }  from 'store/tasks'
import { Message } from 'components/atoms'
import { TaskCard } from 'components/organisms'
import { StyledCollapse } from './TasksList.styles'

const TasksList = () => {
  const tasks = useSelector(tasksSelectors.sortedTasks)

  return (
    <StyledCollapse accordion>
      {tasks.length
        ? tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))
        : <Message message={NO_RESULTS_MSG} />
      }
    </StyledCollapse>
  )
}

export default TasksList
