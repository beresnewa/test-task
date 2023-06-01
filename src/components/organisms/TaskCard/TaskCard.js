import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Collapse } from 'antd'
import { useAction } from 'utils/hooks'
import { selectors as tasksSelectors, actions as tasksActions }  from 'store/tasks'
import { SubTasksList } from 'components/organisms'

const TaskCard = ({ task, ...props }) => {
  const { id: taskId, title } = task
  const subTasks = useSelector(tasksSelectors.subTasksList)(taskId)
  const fetchSubTasks = useAction(tasksActions.fetchSubTasks)

  const handleClick = useCallback(() => {
    if (!subTasks.length) {
      fetchSubTasks(taskId)
    }
  }, [fetchSubTasks, subTasks, taskId])

  return (
    <Collapse.Panel header={title} key={taskId} onClick={handleClick} {...props}>
      <SubTasksList taskId={taskId}/>
    </Collapse.Panel>
  )
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createTime: PropTypes.number.isRequired
  }).isRequired
}

export default TaskCard
