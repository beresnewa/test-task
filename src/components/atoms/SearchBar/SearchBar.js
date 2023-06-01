import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAction } from 'utils/hooks'
import { actions as tasksActions, selectors as tasksSelectors }  from 'store/tasks'
import { StyledSearch } from './SearchBar.styles'

const SearchBar = () => {
  const searchValue = useSelector(tasksSelectors.searchValue)
  const applySearch = useAction(tasksActions.setAppliedSearch)
  const setSearchValue = useAction(tasksActions.setSearch)

  const onChange = useCallback(e => setSearchValue(e.currentTarget.value), [setSearchValue])

  return (
    <StyledSearch
      placeholder="Search by title"
      value={searchValue}
      onChange={onChange}
      onSearch={applySearch}
      enterButton
    />
  )
}

export default SearchBar
