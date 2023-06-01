import React from 'react'
import PropTypes from 'prop-types'
import { Text } from './Message.styles'

const Message = ({ message }) => <Text>{message}</Text>

Message.propTypes = {
  message: PropTypes.string.isRequired
}

export default Message
