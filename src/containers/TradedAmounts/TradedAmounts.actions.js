import { makeActionCreator } from '../../config/store/utils'
import axios from 'axios'

export const TRADEDAMOUNT = 'TRADEDAMOUNT'
export const TRADEDAMOUNT_ERROR = 'TRADEDAMOUNT_ERROR'
export const TRADEDAMOUNT_SUCCESS = 'TRADEDAMOUNT_SUCCESS'
export const onTradedAmount = makeActionCreator(TRADEDAMOUNT)
export const onTradedAmountError = makeActionCreator(TRADEDAMOUNT_ERROR, 'payload')
export const onTradedAmountSuccess = makeActionCreator(TRADEDAMOUNT_SUCCESS, 'payload')

export const onTradedAmountThunk = (updatedValue) => async(dispatch) => {
  try {
    dispatch(onTradedAmount())
    const res = await axios.post('http://localhost:8003/v1/calculo/montoacumulado/', updatedValue)
    if (res.data.success === 'OK') {
      const arrayAmounts = res.data.payload.map(({ year, data: innerData }) => ({
        name: year,
        month: innerData.map(({ month }) => month),
        amount: innerData.map(({ amount }) => amount),
        totalAmount: innerData.map(({ totalAmount }) => totalAmount)
      }))

      const jsonArray = arrayAmounts.map(item =>
        item.amount.map((innerData, index) => ({
          anual: item.name,
          month: item.month[index],
          amount: item.amount[index],
          totalAmount: item.totalAmount[index]
        }))
      )
      const newArray = [].concat.apply([], jsonArray)
      const categories = Object.keys(newArray[0])
      const cvsStructure = [categories, ...newArray.map(item => [item.anual, item.month, item.amount, item.totalAmount])]

      const payload = { chartStructure: arrayAmounts, csvStructure: cvsStructure }
      dispatch(onTradedAmountSuccess(payload))
    } else {
      dispatch(onTradedAmountError(res.data.errores))
    }
  } catch (error) {
    dispatch(onTradedAmountError(error))
  }
}
