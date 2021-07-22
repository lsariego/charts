import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Grid, Box } from '@material-ui/core'
import formatNumber from '../../modules/utils/format-number'
import InfoLabel from '../../components/Labels/InfoLabel'
import LineChart from '../../components/Charts/LineChart'
import Table from '../../components/Tables/Table.jsx'
import TableRow from '../../components/Tables/TableRow'
import TableCell from '../../components/Tables/TableCell'
import Infobar from '../../components/Infobar/Infobar'
import { useSelect } from '../../components/Inputs/Inputs.hooks'
import Select from '../../components/Inputs/Select'
import Pagination from '../../components/Pagination/Pagination'
import IconButton from '../../components/Buttons/IconButton'
import { fetchTradedAmounts } from '../BuyersProfile/TradedAmounts.actions'

const TradedAmounts = () => {
  // Toggle Between Chart / Table //
  const [showTable, setShowTable] = useState(false)

  // Const for Selects //
  const years = [
    { name: '2021', value: 2021 },
    { name: '2020', value: 2020 },
    { name: '2019', value: 2019 }
  ]
  const distribution = [
    { name: 'Mes del año', value: 1 },
    { name: 'Monto acumulado', value: 2 }
  ]
  const { multiValue: yearsValue, onChange: handleChangeMultiple } = useSelect({
    initialValue: [2021],
    isMultiple: true
  })
  const { value: distValue, onChange: handleDistribution } = useSelect({ initialValue: 1 })

  // Table's Pagination //
  const [currentPage, setCurrentPage] = useState(1)

  // Load Data //
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.tradedAmount)
  const { json } = useSelector(state => state.tradedAmount)

  useEffect(() => {
    dispatch(fetchTradedAmounts())
  }, [])

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} lg={10}>
          <h2>Montos transados</h2>
          {setShowTable}
          <p>
            Los montos transados por un organismo público se obtienen desde las órdenes de compra emitidas a través de
            Mercado Público.
            <br />
            <br />A continuación podrás conocer como se distribuyen los montos transados del organismo público por año.
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={6} md={2}>
          <Box mt={5}>
            <Select options={years} label="Año" multiple value={yearsValue} onChange={handleChangeMultiple} />
          </Box>
        </Grid>
        <Grid item xs={6} md={2}>
          <Box mt={5}>
            <Select options={distribution} label="Distribución" value={distValue} onChange={handleDistribution} />
          </Box>
        </Grid>
        <Grid container item xs={12} md={8} justify="flex-end">
          <Box mt={8}>
            <IconButton
              type="toggleChart"
              variant="outlined"
              singleIcn
              margin="0 10px 0 0"
              disabled={!showTable}
              onClick={() => {
                setShowTable(false)
              }}
            />
            <IconButton
              type="toggleTable"
              variant="outlined"
              singleIcn
              disabled={showTable}
              onClick={() => {
                setShowTable(true)
              }}
            />
          </Box>
        </Grid>
        {showTable ? (
          <>
            <Grid item xs={12}>
              <Table
                head={
                  <TableRow>
                    <TableCell head padding="10">
                      Año
                    </TableCell>
                    <TableCell head>Mes</TableCell>
                    <TableCell head>Monto por Mes</TableCell>
                    <TableCell head>Monto Acumulado</TableCell>
                  </TableRow>
                }
              >
                {data.slice(currentPage - 1, currentPage).map((e, index) =>
                  e.data.map((x, index) => (
                    <TableRow key={index} backgroundColor={index % 2 === 0 ? 'gray3' : null}>
                      <TableCell padding="10">{e.name}</TableCell>
                      <TableCell>{e.mes[index]}</TableCell>
                      <TableCell>${formatNumber(e.data[index])}</TableCell>
                      <TableCell>${formatNumber(e.montoAcumulado[index])}</TableCell>
                    </TableRow>
                  ))
                )}
              </Table>
            </Grid>
            <Grid container justify="flex-end">
              <Box my={3}>
                <Pagination size="small" page={currentPage} count={data.length} setCurrentPage={setCurrentPage} />
              </Box>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Box mb={3}>
              <InfoLabel label="Valores en millones (CLP)" />
            </Box>
            <LineChart data={data} />
          </Grid>
        )}
      </Grid>
      <Grid>
        <Box mt={2}>
          <Infobar showTable={showTable} csv={json} chart="exportLineChart" />
        </Box>
      </Grid>
    </Container>
  )
}

export default TradedAmounts
