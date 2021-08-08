import { makeActionCreator } from '../../config/store/utils'
import axios from 'axios'

export const BUYINGMODALITIES = 'BUYINGMODALITIES'
export const BUYINGMODALITIES_ERROR = 'BUYINGMODALITIES_ERROR'
export const BUYINGMODALITIES_SUCCESS = 'BUYINGMODALITIES_SUCCESS'
export const onBuyingModalities = makeActionCreator(BUYINGMODALITIES)
export const onBuyingModalitiesError = makeActionCreator(BUYINGMODALITIES_ERROR, 'payload')
export const onBuyingModalitiesSuccess = makeActionCreator(BUYINGMODALITIES_SUCCESS, 'payload')

export const onBuyingModalitiesThunk = (idEntity, year) => async(dispatch) => {
  try {
    dispatch(onBuyingModalities())
    const res = await axios.get(`http://localhost:8003/v1/modalidad/compra/${idEntity}/${year}`)
    if (res.data.success === 'OK') {
      const singleObj = res.data.payload.find(item => item.year === year)
      const chartData = singleObj.data.map(item => ({ ...item, y: item.amount }))

      const csvData = chartData.map(item => [item.name, item.orders, item.amount])

      const payload = { chartStructure: chartData, csvStructure: csvData }
      dispatch(onBuyingModalitiesSuccess(payload))
    } else {
      dispatch(onBuyingModalitiesError(res.data.errores))
    }
  } catch (error) {
    dispatch(onBuyingModalitiesError(error))
  }
}
