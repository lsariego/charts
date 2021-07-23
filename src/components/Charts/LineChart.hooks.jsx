import { useEffect, useState } from 'react'

/**
 * The LineChart's custom hook.
 */
const useLineChart = data => {
  const [serie, setSerie] = useState([])
  const [category, setCategory] = useState([])
  const colors = ['#0097A7', '#FBC02D', '#F57C00', '#E64A19']

  useEffect(() => {
    const setData = () => {
      const arraySeries = data.map((item, index) => ({
        ...item,
        color: colors[index]
      }))
      const arrayCategories = arraySeries.map(item => item.mes)
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
