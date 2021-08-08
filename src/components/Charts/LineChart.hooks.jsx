import { useEffect, useState } from 'react'
import theme from '../../config/styles/theme'

/**
 * The LineChart's custom hook.
 */
const useLineChart = (chartStructure, distValue) => {
  const [serie, setSerie] = useState([])
  const category = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const colors = [
    theme.palette.charts.bondiBlue,
    theme.palette.charts.saffron,
    theme.palette.charts.tangerine,
    theme.palette.charts.cinnabar
  ]

  useEffect(() => {
    const setData = () => {
      const arraySeries = chartStructure.map((item, index) => ({
        name: item.name,
        amount: item.amount,
        totalAmount: item.totalAmount,
        data: item[distValue].map(dataItem => dataItem),
        month: item.month,
        color: colors[index]
      }))
      setSerie(arraySeries)
    }
    setData()
  }, [chartStructure, distValue])

  return { serie, category }
}

export default useLineChart
