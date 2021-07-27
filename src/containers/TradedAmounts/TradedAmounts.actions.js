import { makeActionCreator } from '../../config/store/utils'

export const TRADEDAMOUNT_START = 'TRADEDAMOUNT_START'
export const TRADEDAMOUNT_ERROR = 'TRADEDAMOUNT_ERROR'
export const TRADEDAMOUNT_SUCCESS = 'TRADEDAMOUNT_SUCCESS'
export const onTradedAmountStart = makeActionCreator(TRADEDAMOUNT_START)
export const onTradedAmountError = makeActionCreator(TRADEDAMOUNT_ERROR)
export const onTradedAmountSuccess = makeActionCreator(TRADEDAMOUNT_SUCCESS, 'payload')

export const onTradedAmountThunk = () => dispatch => {
  // TODO: Fake Data to load at the moment //
  const initData = [
    {
      year: 2021,
      data: [
        { month: 'Enero', amount: 5000000, totalAmount: 5000000 },
        { month: 'Febrero', amount: 3500000, totalAmount: 8500000 },
        { month: 'Marzo', amount: 15000000, totalAmount: 23500000 },
        { month: 'Abril', amount: 5000000, totalAmount: 28500000 },
        { month: 'Mayo', amount: 3500000, totalAmount: 31500000 },
        { month: 'Junio', amount: 15000000, totalAmount: 46500000 },
        { month: 'Julio', amount: 13000000, totalAmount: 49500000 },
        { month: 'Agosto', amount: 20000000, totalAmount: 69500000 },
        { month: 'Septiembre', amount: 12000000, totalAmount: 81500000 },
        { month: 'Octubre', amount: 11000000, totalAmount: 92500000 },
        { month: 'Noviembre', amount: 12000000, totalAmount: 104500000 },
        { month: 'Diciembre', amount: 14000000, totalAmount: 128500000 }
      ]
    },
    {
      year: 2020,
      data: [
        { month: 'Enero', amount: 3000000, totalAmount: 3000000 },
        { month: 'Febrero', amount: 2500000, totalAmount: 5500000 },
        { month: 'Marzo', amount: 7000000, totalAmount: 12500000 },
        { month: 'Abril', amount: 4500000, totalAmount: 17000000 },
        { month: 'Mayo', amount: 3000000, totalAmount: 47000000 },
        { month: 'Junio', amount: 9000000, totalAmount: 58000000 },
        { month: 'Julio', amount: 12000000, totalAmount: 70000000 },
        { month: 'Agosto', amount: 10000000, totalAmount: 80000000 },
        { month: 'Septiembre', amount: 8000000, totalAmount: 88000000 },
        { month: 'Octubre', amount: 5000000, totalAmount: 93000000 },
        { month: 'Noviembre', amount: 16000000, totalAmount: 109000000 },
        { month: 'Diciembre', amount: 20000000, totalAmount: 129000000 }
      ]
    },
    {
      year: 2019,
      data: [
        { month: 'Enero', amount: 2000000, totalAmount: 2000000 },
        { month: 'Febrero', amount: 1500000, totalAmount: 3500000 },
        { month: 'Marzo', amount: 5000000, totalAmount: 8500000 },
        { month: 'Abril', amount: 8500000, totalAmount: 17000000 },
        { month: 'Mayo', amount: 1200000, totalAmount: 29000000 },
        { month: 'Junio', amount: 15000000, totalAmount: 44000000 },
        { month: 'Julio', amount: 10000000, totalAmount: 54000000 },
        { month: 'Agosto', amount: 15000000, totalAmount: 69000000 },
        { month: 'Septiembre', amount: 11000000, totalAmount: 80000000 },
        { month: 'Octubre', amount: 7000000, totalAmount: 87000000 },
        { month: 'Noviembre', amount: 15500000, totalAmount: 102500000 },
        { month: 'Diciembre', amount: 10000000, totalAmount: 112500000 }
      ]
    }
  ]
  const arrayAmounts = initData.map(({ year, data: innerData }) => ({
    name: year,
    month: innerData.map(({ month }) => month),
    data: innerData.map(({ amount }) => amount),
    totalAmount: innerData.map(({ totalAmount }) => totalAmount)
  }))

  const jsonArray = arrayAmounts.map(item =>
    item.data.map((innerData, index) => ({
      anual: item.name,
      month: item.month[index],
      amount: item.data[index],
      totalAmount: item.totalAmount[index]
    }))
  )
  const newArray = [].concat.apply([], jsonArray)
  const categories = Object.keys(newArray[0])
  const cvsStructure = [categories, ...newArray.map(item => [item.anual, item.month, item.amount, item.totalAmount])]

  const payload = { chartStructure: arrayAmounts, csvStructure: cvsStructure }

  try {
    dispatch(onTradedAmountStart())
    // TODO: Axios request to get result status and then compare result.status to dispatch Success or Error
    dispatch(onTradedAmountSuccess(payload))
  } catch (error) {
    dispatch(onTradedAmountError(error))
  }
}
