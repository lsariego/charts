import { useEffect, useState } from 'react'
import theme from '../../config/styles/theme'
import formatToAmount from '../../modules/utils/formatters'

/**
 * The Sankey's custom hook.
 */
const useSankeyChart = (data, type) => {
  const [serie, setSerie] = useState([])
  const colors = [
    theme.palette.charts.wisteria,
    theme.palette.charts.tonysPink,
    theme.palette.charts.macNcheese,
    theme.palette.charts.creamBrulee
  ]

  useEffect(() => {
    const setData = data => {
      data.sort((a, b) => a.amount - b.amount)
      const totalValue = data.reduce((a, b) => a + (b.amount || 0), 0)
      const totalBiddings = data.reduce((a, b) => a + (b.quantiyBiddings || 0), 0)
      const totalOrders = data.reduce((a, b) => a + (b.quantityOrders || 0), 0)

      const newArray = data.map((item, index) => ({
        color: colors[index],
        from: type === 1 ? 'Monto total de licitaciones: $' + formatToAmount(totalValue)
          : type === 2 ? 'Total de ordenes de compra: ' + totalBiddings
            : type === 3 ? 'Total de licitaciones: ' + totalOrders : null,
        to: type === 1 ? item.name + ': $' + formatToAmount(item.amount)
          : type === 2 ? item.name + ': ' + item.quantiyBiddings
            : type === 3 ? item.name + ': ' + item.quantityOrders : null,
        weight: index + 1
      }))
      setSerie(newArray)
    }
    setData(data)
  }, [data])

  return { serie }
}

export default useSankeyChart
