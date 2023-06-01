import React from 'react'
import { useSelector } from 'react-redux'
import { Spin } from 'antd'
import { NO_TASKS_MSG } from 'const'
import { selectors as tasksSelectors } from 'store/tasks'
import { Message } from 'components/atoms'
import { TasksList, ToolBar } from 'components/organisms'
import { Title, LoaderWrap, StyledAlert } from './Tasks.styles'

const Tasks = () => {
  const isLoading = useSelector(tasksSelectors.isLoading)
  const errorText = useSelector(tasksSelectors.errorText)
  const tasks = useSelector(tasksSelectors.tasksList)

  return (
    <div>
      <Title>Processes</Title>

      <ToolBar />
      {tasks.length
        ? <TasksList />
        : !isLoading && <Message message={NO_TASKS_MSG} />
      }

      {isLoading &&
        <LoaderWrap>
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </LoaderWrap>
      }

      {errorText && <StyledAlert type="error" message={errorText} banner />}
    </div>
  )
}

export default Tasks
