import React from 'react'
import { Space } from 'antd'
import { useAction } from 'utils/hooks'
import { actions as tasksActions }  from 'store/tasks'
import { LabelsPanel, SortSelect } from 'components/molecules'
import { Button, SearchBar } from 'components/atoms'
import { Wrapper } from './ToolBar.styles'

const ToolBar = () => {
  const createTaskHandler = useAction(tasksActions.createTask)
  const resetHandler = useAction(tasksActions.resetFilters)

  return (
    <Wrapper>
      <Space size="middle">
        <Button onClick={createTaskHandler} type="primary">Create</Button>
        <SortSelect />
        <SearchBar />
        <Button onClick={resetHandler} type="text">Reset filters</Button>
      </Space>

      <LabelsPanel />
    </Wrapper>
  )
}

export default ToolBar
