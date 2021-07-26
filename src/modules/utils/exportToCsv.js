/**
 * Export a formatted array into CSV
 */
const exportToCsv = data => {
  const excelSheet = data.map(item => item.join(',')).join('\n')
  const link = document.createElement('a')
  const blob = new Blob([excelSheet], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  link.href = url
  link.setAttribute('download', 'chilecompra.csv')
  link.click()
}

export default exportToCsv
