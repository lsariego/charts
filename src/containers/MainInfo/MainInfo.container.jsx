import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumbs from '../../components/Navigation/Breadcrumbs'
import Typography from '../../components/Basics/Typography'
import LinkButton from '../../components/Buttons/LinkButton'
import SimpleSelect from '../../components/Inputs/SimpleSelect'
import { useSelect } from '../../components/Inputs/Inputs.hooks'
import { Wrapper, GridItem, LocationIcon } from './MainInfo.styles'
import { onMainInfoThunk } from './MainInfo.actions'
import formatToAmount from '../../modules/utils/formatters'

const MainInfo = () => {
  // BreadCrumbs Nav
  // FIXME: This data will be changed when the microservice is ready to load the data
  const breadCrumbs = [
    {
      isExternal: false,
      link: '',
      text: 'Datos Abiertos'
    },
    {
      isExternal: false,
      link: '',
      text: 'Organismos compradores'
    },
    {
      isExternal: false,
      link: '',
      text: 'Municipalidades'
    },
    {
      isExternal: false,
      link: '',
      text: 'Municipalidad de Santiago'
    }
  ]

  const years = [
    { name: '2020', value: 2020 },
    { name: '2019', value: 2019 },
    { name: '2018', value: 2018 },
    { name: '2017', value: 2017 },
    { name: '2016', value: 2016 },
    { name: '2015', value: 2015 },
    { name: '2014', value: 2014 }
  ]

  const { value: yearsValue, onChange: handleChange } = useSelect({
    initialValue: 2020,
    changeCallback: updatedValue => {
      dispatch(onMainInfoThunk(86568, updatedValue))
    }
  })

  // Init Data Load
  const dispatch = useDispatch()
  const { data: { totalAmount, orders, biddings } } = useSelector(state => state.mainInfo)

  useEffect(() => {
    dispatch(onMainInfoThunk(86568, 2020))
  }, [])

  return (
    <>
      <BreadCrumbs breadcrumbs={breadCrumbs} align="center" />
      <Wrapper margin="50px auto 0 auto" className="mainInfo">
        <GridItem container>
          <GridItem xs={12} sm={6}>
            <LinkButton color="dark" width="100px" size="small"><LocationIcon /> MUNICIPALIDADES</LinkButton>
            <Typography margin="25px 0 0 0" variant="h1" color="black1" fontWeight="bold">Municipalidad de Santiago</Typography>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <LinkButton color="primary">Comparar con otro organismo público</LinkButton>
          </GridItem>
        </GridItem>
      </Wrapper>

      <Wrapper>
        <GridItem container>
          <GridItem item xs={12} sm={4} className="mainLabelSearch">
            <GridItem container>
              <GridItem item xs={12} sm={11}>
                <Typography variant="body2" color="white" fontWeight="bold">Conoce las cifras acumuladas durante el año</Typography>
              </GridItem>
              <GridItem item xs={12} sm={1}>
                <SimpleSelect options={years} value={yearsValue} onChange={handleChange} width="60px" align="right" />
              </GridItem>
            </GridItem>
          </GridItem>
        </GridItem>
      </Wrapper>

      <GridItem container className="mainData">
        <Wrapper>
          <GridItem container>
            <GridItem item xs={12} sm={4}>
              <Typography variant="body1" color="white" fontWeight="light">Monto total transado durante el año</Typography>
              <Typography variant="h2" fontWeight="bold" color="white">${formatToAmount(parseInt(totalAmount), 10)}</Typography>
            </GridItem>
            <GridItem item xs={12} sm={4}>
              <Typography variant="body1" color="white" fontWeight="light">Órdenes de compra enviadas</Typography>
              <Typography variant="h2" fontWeight="bold" color="white">{orders}</Typography>
            </GridItem>
            <GridItem item xs={12} sm={4}>
              <Typography variant="body1" color="white" fontWeight="light">Licitaciones adjudicadas</Typography>
              <Typography variant="h2" fontWeight="bold" color="white">{biddings}</Typography>
            </GridItem>
          </GridItem>
        </Wrapper>
      </GridItem>

      <Wrapper>
        <GridItem container className="mainDefaultText" background="gray6">
          <GridItem item xs={12} sm={6}>
            <Typography variant="body2" color="black1" fontWeight="bold">¿Cómo se obtiene la información de este organismo público?</Typography>
            <br />
            <Typography variant="body2" color="black1">Toda la información de este organismo público se obtiene desde www.mercadopublico.cl en base a las órdenes de compra que haya generado en la plataforma. Una orden de compra es un documento electrónico emitido por un organismo comprador a un proveedor, en donde se solicita la entrega de un producto o servicio y se detalla su precio, cantidad y otras condiciones de entrega.</Typography>
          </GridItem>
          <GridItem item xs={12} sm={6}>
            <Typography variant="body2" color="black1" fontWeight="bold">¿En que se basan las cifras de montos de este organismo público?</Typography>
            <br />
            <Typography variant="body2" color="black1">Los montos que se presentan en cada uno de los gráficos, se obtienen en base a las órdenes de compra en estado: Enviada al proveedor, en proceso, aceptada, solicitud de cancelación y recepción conforme. El monto en pesos considera la conversión de las órdenes de compra en otras monedas, según el tipo de cambio vigente al momento de la actualización de la información.</Typography>
          </GridItem>
        </GridItem>
      </Wrapper>
    </>
  )
}

export default MainInfo
