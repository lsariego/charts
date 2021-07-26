// TODO: Modify and include the "last update:" service.

import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Basics/Typography'
import { Grid } from '@material-ui/core'
import { Root } from '../Infobar/Infobar.styles'
import IconButton from '../Buttons/IconButton'
import exportToCsv from '../../modules/utils/exportToCsv'

/**
 * The Infobar's component.
 */
const Infobar = ({ data, imgButton, showTable }) => {
  const convertToImg = () => {
    imgButton.current.click()
  }

  const downloadCsv = () => {
    exportToCsv(data)
  }

  return (
    <>
      <Root>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle" color="black1" fontWeight="bold">
              ÚLTIMA ACTUALIZACIÓN: 26/07/2021
            </Typography>
          </Grid>
          <Grid container item xs={12} md={6} align="right">
            <Grid item xs={4} align="right">
              <IconButton type="question">Aprende a leer el gráfico</IconButton>
            </Grid>
            <Grid item xs={4} align="right">
              <IconButton type="chart" onClick={convertToImg} disabled={showTable}>
                Guardar Gráfico
              </IconButton>
            </Grid>
            <Grid item xs={4} align="right">
              <IconButton type="download" onClick={downloadCsv}>
                Descargar Datos
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Root>
    </>
  )
}

Infobar.propTypes = {
  imgButton: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
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
