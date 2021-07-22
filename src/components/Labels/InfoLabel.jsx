import React from 'react'
import PropTypes from 'prop-types'
import { BaseLabel, ColorLabel } from './InfoLabel.styles'

const InfoLabel = props => {
  const { label, color } = props

  return (
    <BaseLabel>
      {color ? <ColorLabel color={color} /> : null} {label}
    </BaseLabel>
  )
}

InfoLabel.propTypes = {
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string
}

export default InfoLabel
