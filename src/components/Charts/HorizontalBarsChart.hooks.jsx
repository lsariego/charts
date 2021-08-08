import { useEffect, useState } from 'react'

/**
 * The Horizontal Bars custom hook.
 */
const useHorizontalBar = (chartStructure) => {
  const [serie, setSerie] = useState([])
  const [category, setCategory] = useState([])

  useEffect(() => {
    const setData = () => {
      const modalities = ['Compra Ágil', 'Convenio Marco', 'Licitacion Pública', 'Licitación Privada', 'Trato Directo']
      setCategory(modalities)
      setSerie(chartStructure)
    }
    setData()
  }, [chartStructure])

  return { serie, category }
}

export default useHorizontalBar
