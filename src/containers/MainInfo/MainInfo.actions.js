import { makeActionCreator } from '../../config/store/utils'
import axios from 'axios'

export const MAININFO = 'MAININFO'
export const MAININFO_ERROR = 'MAININFO_ERROR'
export const MAININFO_SUCCESS = 'MAININFO_SUCCESS'
export const onMainInfo = makeActionCreator(MAININFO)
export const onMainInfoError = makeActionCreator(MAININFO_ERROR, 'payload')
export const onMainInfoSuccess = makeActionCreator(MAININFO_SUCCESS, 'payload')

export const onMainInfoThunk = (idEntity, year) => async(dispatch) => {
  try {
    dispatch(onMainInfo())
    const res = await axios.get(`http://localhost:8003/v1/calculo/montokpi/${idEntity}/${year}/12`)
    if (res.data.success === 'OK') {
      const payload = res.data.payload.find(item => item.year === year)
      dispatch(onMainInfoSuccess(payload.data))
    } else {
      dispatch(onMainInfoError(res.data.errores))
    }
  } catch (error) {
    dispatch(onMainInfoError(error))
  }
}
