import React from 'react'
import { useSelector } from 'react-redux'
import { useAction } from 'utils/hooks'
import { NO_LABELS_MSG } from 'const'
import { actions as tasksActions, selectors as tasksSelectors }  from 'store/tasks'
import { Wrapper, Title, StyledLabel } from './LabelsPanel.styles'

const LabelsPanel = () => {
  const allLabels = useSelector(tasksSelectors.allLabels)
  const activeLabels = useSelector(tasksSelectors.activeLabels)
  const toggleActiveLabel = useAction(tasksActions.toggleActiveLabel)

  const isActive = label => activeLabels.includes(label)
  const clickHandler = label => () => toggleActiveLabel(label)

  return (
    <Wrapper>
      <Title>Labels:</Title>

      {allLabels.length
        ? allLabels.map(label => (
          <StyledLabel
            key={`label_${label}`}
            label={label}
            isActive={isActive(label)}
            onClick={clickHandler(label)}
          />
        ))
        : <span>{NO_LABELS_MSG}</span>
      }
    </Wrapper>
  )
}

export default LabelsPanel
