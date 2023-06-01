import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAction } from 'utils/hooks'
import { SORT_OPTIONS } from 'const'
import { actions as tasksActions, selectors as tasksSelectors }  from 'store/tasks'
import { Label, StyledSelect } from './SortSelect.styles'

const SortSelect = () => {
  const sortValue = useSelector(tasksSelectors.sortValue)
  const applySort = useAction(tasksActions.setSort)

  const handleChange = useCallback(value => applySort(value), [applySort])

  return(
    <>
      <Label>Sort By:</Label>
      <StyledSelect
        defaultValue={sortValue}
        onChange={handleChange}
        options={SORT_OPTIONS}
      />
    </>
  )
}

export default SortSelect
