import { makeActionCreator } from '../../config/store/utils'
import axios from 'axios'
import formatToAmount from '../../modules/utils/formatters'

export const BIDDINGSDISTRIBUTION = 'BIDDINGSDISTRIBUTION'
export const BIDDINGSDISTRIBUTION_ERROR = 'BIDDINGSDISTRIBUTION_ERROR'
export const BIDDINGSDISTRIBUTION_SUCCESS = 'BIDDINGSDISTRIBUTION_SUCCESS'
export const onBiddingsDistribution = makeActionCreator(BIDDINGSDISTRIBUTION)
export const onBiddingsDistributionError = makeActionCreator(BIDDINGSDISTRIBUTION_ERROR, 'payload')
export const onBiddingsDistributionSuccess = makeActionCreator(BIDDINGSDISTRIBUTION_SUCCESS, 'payload')

export const onBiddingsDistributionThunk = (year, idEntity, type) => async(dispatch) => {
  try {
    dispatch(onBiddingsDistribution())
    const res = await axios.get(`http://localhost:8003/v1/sankey/getSankey/${year}/${idEntity}/${type}`)
    if (res.data.success === 'OK') {
      const resPayload = res.data.payload
      const singlePayload = resPayload.find(item => item.year === year)

      const newArray = [].concat.apply([], singlePayload.data)

      const csvStructure = [['Año', 'Nombre', 'Valor'], ...newArray.map(item => [year, item.name, type === 1 ? '$' + formatToAmount(item.amount) : type === 2 ? item.quantiyBiddings : type === 3 ? item.quantityOrders : null])]

      const payload = { chartStructure: singlePayload, csvStructure: csvStructure }
      dispatch(onBiddingsDistributionSuccess(payload))
    } else {
      dispatch(onBiddingsDistributionError(res.data.errores))
    }
  } catch (error) {
    dispatch(onBiddingsDistributionError(error))
  }
}
