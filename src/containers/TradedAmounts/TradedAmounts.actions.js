import { makeActionCreator } from '../../config/store/utils'

export const TRADEDAMOUNT_START = 'TRADEDAMOUNT'
export const TRADEDAMOUNT_ERROR = 'TRADEDAMOUNT_ERROR'
export const TRADEDAMOUNT_SUCCESS = 'TRADEDAMOUNT_SUCCESS'
export const onTradedAmount = makeActionCreator(TRADEDAMOUNT_START)
export const onTradedAmountError = makeActionCreator(TRADEDAMOUNT_ERROR)
export const onTradedAmountSuccess = makeActionCreator(TRADEDAMOUNT_SUCCESS, 'payload')

export const onTradedAmountThunk = () => dispatch => {
  // Fake Data to load //
  const initData = [
    {
      year: 2021,
      data: [
        { mes: 'Enero', monto: 5000000, montoAcumulado: 5000000 },
        { mes: 'Febrero', monto: 3500000, montoAcumulado: 8500000 },
        { mes: 'Marzo', monto: 15000000, montoAcumulado: 23500000 },
        { mes: 'Abril', monto: 5000000, montoAcumulado: 28500000 },
        { mes: 'Mayo', monto: 3500000, montoAcumulado: 31500000 },
        { mes: 'Junio', monto: 15000000, montoAcumulado: 46500000 },
        { mes: 'Julio', monto: 13000000, montoAcumulado: 49500000 },
        { mes: 'Agosto', monto: 20000000, montoAcumulado: 69500000 },
        { mes: 'Septiembre', monto: 12000000, montoAcumulado: 81500000 },
        { mes: 'Octubre', monto: 11000000, montoAcumulado: 92500000 },
        { mes: 'Noviembre', monto: 12000000, montoAcumulado: 104500000 },
        { mes: 'Diciembre', monto: 14000000, montoAcumulado: 128500000 }
      ]
    },
    {
      year: 2020,
      data: [
        { mes: 'Enero', monto: 3000000, montoAcumulado: 3000000 },
        { mes: 'Febrero', monto: 2500000, montoAcumulado: 5500000 },
        { mes: 'Marzo', monto: 7000000, montoAcumulado: 12500000 },
        { mes: 'Abril', monto: 4500000, montoAcumulado: 17000000 },
        { mes: 'Mayo', monto: 3000000, montoAcumulado: 47000000 },
        { mes: 'Junio', monto: 9000000, montoAcumulado: 58000000 },
        { mes: 'Julio', monto: 12000000, montoAcumulado: 70000000 },
        { mes: 'Agosto', monto: 10000000, montoAcumulado: 80000000 },
        { mes: 'Septiembre', monto: 8000000, montoAcumulado: 88000000 },
        { mes: 'Octubre', monto: 5000000, montoAcumulado: 93000000 },
        { mes: 'Noviembre', monto: 16000000, montoAcumulado: 109000000 },
        { mes: 'Diciembre', monto: 20000000, montoAcumulado: 129000000 }
      ]
    },
    {
      year: 2019,
      data: [
        { mes: 'Enero', monto: 2000000, montoAcumulado: 2000000 },
        { mes: 'Febrero', monto: 1500000, montoAcumulado: 3500000 },
        { mes: 'Marzo', monto: 5000000, montoAcumulado: 8500000 },
        { mes: 'Abril', monto: 8500000, montoAcumulado: 17000000 },
        { mes: 'Mayo', monto: 1200000, montoAcumulado: 29000000 },
        { mes: 'Junio', monto: 15000000, montoAcumulado: 44000000 },
        { mes: 'Julio', monto: 10000000, montoAcumulado: 54000000 },
        { mes: 'Agosto', monto: 15000000, montoAcumulado: 69000000 },
        { mes: 'Septiembre', monto: 11000000, montoAcumulado: 80000000 },
        { mes: 'Octubre', monto: 7000000, montoAcumulado: 87000000 },
        { mes: 'Noviembre', monto: 15500000, montoAcumulado: 102500000 },
        { mes: 'Diciembre', monto: 10000000, montoAcumulado: 112500000 }
      ]
    }
  ]
  const arrayAmounts = initData.map(({ year, data: innerData }, index) => ({
    name: year,
    mes: innerData.map(({ mes }) => mes),
    data: innerData.map(({ monto }) => monto),
    montoAcumulado: innerData.map(({ montoAcumulado }) => montoAcumulado)
  }))

  const jsonArray = arrayAmounts.map((item, index) =>
    item.data.map((e, index) => ({
      anual: item.name,
      mes: item.mes[index],
      monto: item.data[index],
      montoAcumulado: item.montoAcumulado[index]
    }))
  )
  const newArray = [].concat.apply([], jsonArray)
  const categories = Object.keys(newArray[0])

  const payload = { chartStructure: arrayAmounts, csvStructure: newArray, csvLabels: categories }
  dispatch(onTradedAmountSuccess(payload))
}
