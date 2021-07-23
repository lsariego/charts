import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Root } from '../Infobar/Infobar.styles'
import IconButton from '../Buttons/IconButton'
import ReactExport from 'react-export-excel'

/**
 * The Infobar's component.
 */
const Infobar = ({ data, labels, imgButton, showTable }) => {
  const convertToImg = () => {
    imgButton.current.click()
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
              <IconButton type="chart" onClick={convertToImg} disabled={showTable}>
                Guardar Gráfico
              </IconButton>
            </Grid>
            <Grid item xs={4} align="right">
              <ExcelFile element={<IconButton type="download">Descargar Datos</IconButton>} filename="Chilecompra">
                <ExcelSheet data={data} name="Chilecompra">
                  {labels.map((column, index) => (
                    <ExcelColumn key={index} label={column} value={column} />
                  ))}
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
  imgButton: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  showTable: PropTypes.bool,
  labels: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      anual: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      mes: PropTypes.number.isRequired,
      monto: PropTypes.number.isRequired,
      montoAcumulado: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Infobar
