import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Space } from 'antd'
import { LOADING_MSG, NO_SUBTASKS_MSG } from 'const'
import { selectors as tasksSelectors }  from 'store/tasks'
import { SubTaskCard } from 'components/molecules'

const SubTasksList = ({ taskId }) => {
  const filteredSubTasks = useSelector(tasksSelectors.filteredSubTasksList)(taskId)
  const subTasks = useSelector(tasksSelectors.subTasksList)(taskId)

  const content = useMemo(() => {
    if (!subTasks.length) {
      return <span>{LOADING_MSG}</span>
    }
    if (!filteredSubTasks.length) {
      return <span>{NO_SUBTASKS_MSG}</span>
    }

    return filteredSubTasks.map(subTask => (
      <SubTaskCard key={subTask.id} subTask={subTask} />
    ))
  }, [filteredSubTasks, subTasks.length])

  return (
    <Space direction="vertical" size={10}>
      {content}
    </Space>
  )
}

SubTasksList.propTypes = {
  taskId: PropTypes.string.isRequired,
}

export default SubTasksList
