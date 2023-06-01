import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { useAction } from 'utils/hooks'
import { actions as tasksActions }  from 'store/tasks'
import { Label } from 'components/atoms'
import { StyledCard } from './SubTaskCard.styles'

const SubTasksCard = ({ subTask }) => {
  const [disabled, setDisabled] = useState(false)
  const { id: subTaskId, title, taskId, labels } = subTask
  const deleteSubTask = useAction(tasksActions.deleteSubTask)

  const handleClick = useCallback(() => {
    setDisabled(true)
    deleteSubTask({ subTaskId, taskId })
  }, [deleteSubTask, subTaskId, taskId])

  return (
    <StyledCard
      title={title}
      extra={<button type="button" disabled={disabled} onClick={handleClick}>x</button>}
    >
      {labels.map(label => (
        <Label key={`label_${label}`} label={label} />
      ))}
    </StyledCard>
  )
}

SubTasksCard.propTypes = {
  subTask: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    taskId: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
}

export default SubTasksCard
