import styled from 'styled-components'
import { Alert } from 'antd'

export const LoaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 250px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,255,255,.6);
  z-index: 9999999;
`

export const Title = styled.h1`
  margin: 10px;
`

export const StyledAlert = styled(Alert)`
  position fixed;
  top: 0;
`
