import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wrapper, GridWrapper, BoxWrapper } from './BiddingsDistribution.styles'
import Typography from '../../components/Basics/Typography'
import { useSelect } from '../../components/Inputs/Inputs.hooks'
import Select from '../../components/Inputs/Select'
import IconButton from '../../components/Buttons/IconButton'
import { onBiddingsDistributionThunk } from './BiddingsDistribution.actions'
import useSankeyChart from '../../components/Charts/SankeyChart.hooks'
import SankeyChart from '../../components/Charts/SankeyChart'
import Pagination from '../../components/Pagination/Pagination'
import { usePagination } from '../../components/Pagination/Pagination.hooks'
import Table from '../../components/Tables/Table.jsx'
import TableRow from '../../components/Tables/TableRow'
import TableCell from '../../components/Tables/TableCell'
import Infobar from '../../components/Infobar/Infobar'

const BiddingsDistribution = () => {
  // Toggle Between Chart / Table //
  const [showTable, setShowTable] = useState(false)
  const handleShowTable = updatedValue => () => setShowTable(updatedValue)

  // Const for Selects //
  const years = [
    { name: '2021', value: 2021 },
    { name: '2020', value: 2020 },
    { name: '2019', value: 2019 },
    { name: '2018', value: 2018 },
    { name: '2017', value: 2017 },
    { name: '2016', value: 2016 },
    { name: '2015', value: 2015 },
    { name: '2014', value: 2014 }
  ]
  const distribution = [
    { name: 'Montos transados', value: 1 },
    { name: 'Órdenes de compra', value: 2 },
    { name: 'Número de licitaciones', value: 3 }
  ]

  const { value: yearsValue, onChange: handleChange } = useSelect({
    initialValue: 2021,
    changeCallback: updatedValue => {
      dispatch(onBiddingsDistributionThunk(updatedValue, 6925, distValue))
    }
  })
  const { value: distValue, onChange: handleDistribution } = useSelect({
    initialValue: 1,
    changeCallback: updatedValue => {
      dispatch(onBiddingsDistributionThunk(yearsValue, 6925, updatedValue))
    }
  })

  // Load Data
  const dispatch = useDispatch()
  const {
    data: { chartStructure, csvStructure }
  } = useSelector(state => state.biddingsDistribution)

  // Table's Pagination //
  const rowsPerPage = 4
  const { page, totalPages, onChangePage, onGetCurrentPage } = usePagination({
    data: csvStructure.slice(1),
    initialPage: 1,
    rowsPerPage
  })

  const inputSankeyChartRef = useRef()

  // SankeyChart Hook //
  const { serie: info } = useSankeyChart(chartStructure, distValue)

  useEffect(() => {
    dispatch(onBiddingsDistributionThunk(yearsValue, 6925, distValue))
  }, [])

  return (
    <Wrapper>
      <GridWrapper container>
        <GridWrapper item xs={12}>
          <Typography variant="h2" fontWeight="bold">
            Distribución de sus licitaciones públicas
          </Typography>
          <Typography variant="body" margin="30px 0 0 0">
            Las licitaciones son un procedimiento administrativo efectuado en forma autónoma por cada organismo comprador. Se publica una invitación a través de Mercado Público a los proveedores a proporcionar un bien o servicio, posteriormente se selecciona y adjudica la oferta más conveniente según los criterios que se establezcan en las bases de licitación.
            <br /><br />
            A continuación podrás conocer como se distribuyen los montos transados, número de órdenes de compra y número de licitaciones entre los distintos tipos de licitaciones públicas.
            <br /><br />
            La información referente a licitaciones se basa en todas aquellas licitaciones que se encuentren en estado “Adjudicada” o “Re-adjudicada”. Y la información de montos transados dentro de esta sección corresponde monto bruto (monto neto + impuestos).
          </Typography>
        </GridWrapper>
      </GridWrapper>
      <GridWrapper container spacing={3} alignItems="center">
        <GridWrapper item xs={6} md={2}>
          <BoxWrapper mt={5}>
            <Select options={years} label="Año" value={yearsValue} onChange={handleChange} />
          </BoxWrapper>
        </GridWrapper>
        <GridWrapper item xs={6} md={2}>
          <BoxWrapper mt={5}>
            <Select options={distribution} label="Distribución" value={distValue} onChange={handleDistribution} />
          </BoxWrapper>
        </GridWrapper>
        <GridWrapper container item xs={12} md={8} justify="flex-end">
          <BoxWrapper mt={8}>
            <IconButton
              type="toggleChart"
              variant="outlined"
              singleIcon
              margin="0 10px 0 0"
              disabled={!showTable}
              onClick={handleShowTable(false)}
            />
            <IconButton
              type="toggleTable"
              variant="outlined"
              singleIcon
              disabled={showTable}
              onClick={handleShowTable(true)}
            />
          </BoxWrapper>
        </GridWrapper>
        {showTable ? (
          <>
            <GridWrapper item xs={12}>
              <Table
                head={
                  <TableRow>
                    <TableCell head padding="10">
                      Año
                    </TableCell>
                    <TableCell head>Nombre</TableCell>
                    <TableCell head>Valor</TableCell>
                  </TableRow>
                }
              >
                {onGetCurrentPage().map((item, index) => (
                  <TableRow key={index} backgroundColor={index % 2 === 0 ? 'gray3' : null}>
                    <TableCell padding="10">{item[0]}</TableCell>
                    <TableCell>{item[1]}</TableCell>
                    <TableCell>{item[2]}</TableCell>
                  </TableRow>
                ))}
              </Table>
            </GridWrapper>
            <GridWrapper container justify="flex-end">
              <BoxWrapper my={3}>
                <Pagination size="small" count={totalPages} page={page} onChange={onChangePage} />
              </BoxWrapper>
            </GridWrapper>
          </>
        ) : (
          <GridWrapper item xs={12}>
            <SankeyChart inputSankeyChartRef={inputSankeyChartRef} data={info} />
          </GridWrapper>
        )}
      </GridWrapper>
      <GridWrapper>
        <BoxWrapper mt={2}>
          <Infobar showTable={showTable} data={csvStructure} imgButtonRef={inputSankeyChartRef} />
        </BoxWrapper>
      </GridWrapper>
    </Wrapper>
  )
}

export default BiddingsDistribution
