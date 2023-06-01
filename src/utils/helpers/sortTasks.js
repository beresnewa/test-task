import { SORT_BY } from 'const'

const sortByTitle = (tasks, asc) => [...tasks].sort((a, b) => {
  const ascResult = a.title.localeCompare(b.title)

  return asc ? ascResult : (-1 * ascResult)
})

const sortByDate = (tasks, asc) => [...tasks].sort((a, b) => {
  const ascResult = a.createTime - b.createTime

  return asc ? ascResult : (-1 * ascResult)
})

export default (tasks, sort) => {
  switch (sort) {
    case SORT_BY.titleAsc:
      return sortByTitle(tasks, true)

    case SORT_BY.titleDesc:
      return sortByTitle(tasks, false)

    case SORT_BY.dateAsc:
      return sortByDate(tasks, true)

    case SORT_BY.dateDesc:
      return sortByDate(tasks, false)

    default:
      return tasks
  }
}
