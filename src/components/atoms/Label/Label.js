import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

const Label = ({ label, isActive, ...props }) => (
  <Tag color={isActive ? "cyan" : "magenta"} {...props}>{label}</Tag>
)

Label.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool
}

Label.defaultProps = {
  isActive: false
}

export default Label
