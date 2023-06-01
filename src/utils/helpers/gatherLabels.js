export default subTasksArray => (
  subTasksArray.reduce((result, { labels }) => [...result, ...labels], [])
)
