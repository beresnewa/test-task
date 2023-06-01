import styled from 'styled-components'
import { Card } from 'antd'

export const StyledCard = styled(Card)`
  width: 600px;
  border: 1px solid #aaa;

  .ant-card-head {
    min-height: 35px;
    padding-right: 5px;
    border-bottom: 1px solid #ddd;
  }

  .ant-card-head-title {
    white-space: unset;
  }

  .ant-card-extra {
    padding: 5px 3px 5px 10px;

    button {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .ant-card-body {
    padding: 5px 20px;
  }
`
