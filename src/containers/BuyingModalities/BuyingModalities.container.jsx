import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Wrapper, GridWrapper, BoxWrapper } from './BuyingModalities.styles'
import Typography from '../../components/Basics/Typography'
import formatToAmount from '../../modules/utils/formatters'
import InfoLabel from '../../components/Labels/InfoLabel'
import HorizontalBarsChart from '../../components/Charts/HorizontalBarsChart'
import Table from '../../components/Tables/Table.jsx'
import TableRow from '../../components/Tables/TableRow'
import TableCell from '../../components/Tables/TableCell'
import Infobar from '../../components/Infobar/Infobar'
import { useSelect } from '../../components/Inputs/Inputs.hooks'
import Select from '../../components/Inputs/Select'
import Pagination from '../../components/Pagination/Pagination'
import { usePagination } from '../../components/Pagination/Pagination.hooks'
import IconButton from '../../components/Buttons/IconButton'
import { onBuyingModalitiesThunk } from './BuyingModalities.actions'
import useHorizontalBar from '../../components/Charts/HorizontalBarsChart.hooks'

const TradedAmounts = () => {
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

  const { value: yearsValue, onChange: handleChange } = useSelect({
    initialValue: 2021,
    changeCallback: updatedValue => {
      dispatch(onBuyingModalitiesThunk(86568, updatedValue))
    }
  })

  const inputHorizontalBarChartRef = useRef()

  // Load Data //
  const dispatch = useDispatch()
  const {
    data: { chartStructure, csvStructure }
  } = useSelector(state => state.buyingModalities)

  // Table's Pagination //
  const rowsPerPage = 12
  const { page, totalPages, onChangePage, onGetCurrentPage } = usePagination({
    data: csvStructure,
    initialPage: 1,
    rowsPerPage
  })

  // HorizontalBar Hook
  const { serie: info, category: categories } = useHorizontalBar(chartStructure)

  useEffect(() => {
    dispatch(onBuyingModalitiesThunk(86568, 2021))
  }, [])

  return (
    <Wrapper>
      <GridWrapper container>
        <GridWrapper item xs={12}>
          <Typography variant="h2" fontWeight="bold">
            Modalidades de compra
          </Typography>
          {setShowTable}
          <Typography variant="body" margin="30px 0 0 0">
            Estos son las modalidades bajo las cuales ha realizado sus compras ‘Municipalidad de Santiago’, a través de la plataforma Mercado Público en el periodo consultado.
            <br /><br />
            A continuación podrás conocer como realiza sus compras. Las órdenes de compra que se consideran en la visualización son todas aquellas que se encuentran en estado aceptado.
          </Typography>
        </GridWrapper>
      </GridWrapper>
      <GridWrapper container spacing={3} alignItems="center">
        <GridWrapper item xs={6} md={2}>
          <BoxWrapper mt={5}>
            <Select options={years} label="Año" value={yearsValue} onChange={handleChange} />
          </BoxWrapper>
        </GridWrapper>
        <GridWrapper container item xs={12} md={10} justify="flex-end">
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
                    <TableCell head padding="10">Modalidad</TableCell>
                    <TableCell head>Órdenes de compra</TableCell>
                    <TableCell head>Monto total</TableCell>
                  </TableRow>
                }
              >
                {onGetCurrentPage().map((item, index) => (
                  <TableRow key={index} backgroundColor={index % 2 === 0 ? 'gray3' : null}>
                    <TableCell padding="10">{item[0]}</TableCell>
                    <TableCell>{item[1]}</TableCell>
                    <TableCell>${formatToAmount(item[2])}</TableCell>
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
            <HorizontalBarsChart inputHorizontalBarChartRef={inputHorizontalBarChartRef} categories={categories} info={info} />
          </GridWrapper>
        )}
      </GridWrapper>
      <GridWrapper>
        <BoxWrapper mt={2}>
          <Infobar showTable={showTable} data={csvStructure} imgButtonRef={inputHorizontalBarChartRef} />
        </BoxWrapper>
      </GridWrapper>
    </Wrapper>
  )
}

export default TradedAmounts
