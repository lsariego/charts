import { useEffect, useState } from 'react'
import theme from '../../config/styles/theme'

/**
 * The LineChart's custom hook.
 */
const useLineChart = data => {
  const [serie, setSerie] = useState([])
  const [category, setCategory] = useState([])
  const colors = [
    theme.palette.lineCharts.bondiBlue,
    theme.palette.lineCharts.saffron,
    theme.palette.lineCharts.tangerine,
    theme.palette.lineCharts.cinnabar
  ]

  useEffect(() => {
    const setData = () => {
      const arraySeries = data.map((item, index) => ({
        ...item,
        color: colors[index]
      }))
      const arrayCategories = arraySeries.map(item => item.month)
      const merged = [].concat.apply([], arrayCategories)
      const arrayMerged = merged.reduce(function (a, b) {
        if (a.indexOf(b) < 0) a.push(b)
        return a
      }, [])

      setCategory(arrayMerged)
      setSerie(arraySeries)
    }
    setData()
  }, [data])

  return { serie, category }
}

export default useLineChart
