import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Root } from '../Infobar/Infobar.styles'
import IconButton from '../Buttons/IconButton'
import ReactExport from 'react-export-excel'

const Infobar = ({ chart, csv, showTable }) => {
  const convertToImg = () => {
    document.getElementById(chart).click()
  }

  const ExcelFile = ReactExport.ExcelFile
  const ExcelSheet = ReactExport.ExcelSheet
  const ExcelColumn = ReactExport.ExcelColumn

  return (
    <>
      <Root>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={12} md={3}>
            <p>Última actualización: 10/05/2021</p>
          </Grid>
          <Grid container item xs={12} md={6} align="right">
            <Grid item xs={4} align="right">
              <IconButton type="question">Aprende a leer el gráfico</IconButton>
            </Grid>
            <Grid item xs={4} align="right">
              <IconButton type="chart" onClick={() => convertToImg()} disabled={showTable}>
                Guardar Gráfico
              </IconButton>
            </Grid>
            <Grid item xs={4} align="right">
              <ExcelFile element={<IconButton type="download">Descargar Datos</IconButton>} filename="Chilecompra">
                <ExcelSheet data={csv} name="Montos transados">
                  <ExcelColumn label="Año" value="year" />
                  <ExcelColumn label="Mes" value="mes" />
                  <ExcelColumn label="Monto" value="monto" />
                  <ExcelColumn label="Monto Transado" value="montoAcumulado" />
                </ExcelSheet>
              </ExcelFile>
            </Grid>
          </Grid>
        </Grid>
      </Root>
    </>
  )
}

Infobar.propTypes = {
  chart: PropTypes.string.isRequired,
  showTable: PropTypes.bool,
  csv: PropTypes.array
}

export default Infobar
