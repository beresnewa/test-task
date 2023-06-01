export const SORT_BY = {
  titleAsc: 'titleAsc',
  titleDesc: 'titleDesc',
  dateAsc: 'dateAsc',
  dateDesc: 'dateDesc'
}

export const SORT_BY_LABELS = {
  [SORT_BY.titleAsc]: 'Title',
  [SORT_BY.titleDesc]: 'Title (desc)',
  [SORT_BY.dateAsc]: 'Date',
  [SORT_BY.dateDesc]: 'Date (desc)'
}

export const SORT_OPTIONS = [
  {
    value: SORT_BY.dateAsc,
    label: SORT_BY_LABELS[SORT_BY.dateAsc],
  },
  {
    value: SORT_BY.dateDesc,
    label: SORT_BY_LABELS[SORT_BY.dateDesc],
  },
  {
    value: SORT_BY.titleAsc,
    label: SORT_BY_LABELS[SORT_BY.titleAsc],
  },
  {
    value: SORT_BY.titleDesc,
    label: SORT_BY_LABELS[SORT_BY.titleDesc],
  }
]
