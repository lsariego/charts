import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wrapper, GridWrapper, BoxWrapper } from './TradedAmounts.styles'
import Typography from '../../components/Basics/Typography'
import formatToAmount from '../../modules/utils/formatters'
import InfoLabel from '../../components/Labels/InfoLabel'
import LineChart from '../../components/Charts/LineChart'
import Table from '../../components/Tables/Table.jsx'
import TableRow from '../../components/Tables/TableRow'
import TableCell from '../../components/Tables/TableCell'
import Infobar from '../../components/Infobar/Infobar'
import { useSelect } from '../../components/Inputs/Inputs.hooks'
import Select from '../../components/Inputs/Select'
import Pagination from '../../components/Pagination/Pagination'
import { usePagination } from '../../components/Pagination/Pagination.hooks'
import IconButton from '../../components/Buttons/IconButton'
import { onTradedAmountThunk } from './TradedAmounts.actions'

const TradedAmounts = () => {
  // Toggle Between Chart / Table //
  const [showTable, setShowTable] = useState(false)
  const handleShowTable = updatedValue => () => setShowTable(updatedValue)

  // Const for Selects //
  const years = [
    { name: '2021', value: 2021 },
    { name: '2020', value: 2020 },
    { name: '2019', value: 2019 }
  ]
  const distribution = [
    { name: 'mes del año', value: 1 },
    { name: 'monto acumulado', value: 2 }
  ]
  const { multipleValue: yearsValue, onChangeMultiple: handleChangeMultiple } = useSelect({ initialValue: [2021] })
  const { value: distValue, onChange: handleDistribution } = useSelect({ initialValue: 1 })

  const inputLineChart = useRef()

  // Load Data //
  const dispatch = useDispatch()
  const {
    data: { chartStructure, csvStructure }
  } = useSelector(state => state.tradedAmount)

  // Table's Pagination //
  const rowsPerPage = 12
  const { page, totalPages, onChangePage, onGetCurrentPage } = usePagination({
    data: csvStructure.slice(1),
    initialPage: 1,
    rowsPerPage
  })

  useEffect(() => {
    dispatch(onTradedAmountThunk())
  }, [])

  return (
    <Wrapper>
      <GridWrapper container>
        <GridWrapper item xs={12} lg={10}>
          <Typography variant="h2" fontWeight="bold">
            Montos transados
          </Typography>
          {setShowTable}
          <Typography variant="body" margin="15px 0 0 0">
            Los montos transados por un organismo público se obtienen desde las órdenes de compra emitidas a través de
            Mercado Público.
            <br />
            <br />A continuación podrás conocer como se distribuyen los montos transados del organismo público por año.
          </Typography>
        </GridWrapper>
      </GridWrapper>
      <GridWrapper container spacing={3} alignItems="center">
        <GridWrapper item xs={6} md={2}>
          <BoxWrapper mt={5}>
            <Select options={years} label="Año" multiple value={yearsValue} onChange={handleChangeMultiple} />
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
                    <TableCell head>mes</TableCell>
                    <TableCell head>monto por mes</TableCell>
                    <TableCell head>monto acumulado</TableCell>
                  </TableRow>
                }
              >
                {onGetCurrentPage().map((yearItem, index) => (
                  <TableRow key={index} backgroundColor={index % 2 === 0 ? 'gray3' : null}>
                    <TableCell padding="10">{yearItem[0]}</TableCell>
                    <TableCell>{yearItem[1]}</TableCell>
                    <TableCell>${formatToAmount(yearItem[2])}</TableCell>
                    <TableCell>${formatToAmount(yearItem[3])}</TableCell>
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
            <BoxWrapper mb={3}>
              <InfoLabel label="Valores en millones (CLP)" />
            </BoxWrapper>
            <LineChart chartStructure={chartStructure} inputLineChart={inputLineChart} />
          </GridWrapper>
        )}
      </GridWrapper>
      <GridWrapper>
        <BoxWrapper mt={2}>
          <Infobar showTable={showTable} data={csvStructure} imgButton={inputLineChart} />
        </BoxWrapper>
      </GridWrapper>
    </Wrapper>
  )
}

export default TradedAmounts
