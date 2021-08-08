// TODO: Modify and include the "last update:" service.

import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Basics/Typography'
import { Root, GridWrapper } from '../Infobar/Infobar.styles'
import IconButton from '../Buttons/IconButton'
import exportToCsv from '../../modules/utils/exportToCsv'

/**
 * The Infobar's component.
 */
const Infobar = ({ data, imgButtonRef, showTable }) => {
  const convertToImg = () => {
    imgButtonRef.current.click()
  }

  const downloadCsv = () => {
    exportToCsv(data)
  }

  return (
    <Root>
      <GridWrapper container justify="space-between" alignItems="center">
        <GridWrapper item xs={12} md={3}>
          <Typography variant="subtitle" color="black1" fontWeight="bold">
            ÚLTIMA ACTUALIZACIÓN: 26/07/2021
          </Typography>
        </GridWrapper>
        <GridWrapper container item xs={12} md={7} align="right">
          <GridWrapper item xs={4} align="right">
            <IconButton type="question">Aprende a leer el gráfico</IconButton>
          </GridWrapper>
          <GridWrapper item xs={4} align="right">
            <IconButton type="chart" onClick={convertToImg} disabled={showTable}>
              Guardar Gráfico
            </IconButton>
          </GridWrapper>
          <GridWrapper item xs={4} align="right">
            <IconButton type="download" onClick={downloadCsv}>
              Descargar Datos
            </IconButton>
          </GridWrapper>
        </GridWrapper>
      </GridWrapper>
    </Root>
  )
}

Infobar.propTypes = {
  imgButtonRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(window.HTMLButtonElement) })
  ]),
  showTable: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      anual: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      month: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      totalAmount: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Infobar
