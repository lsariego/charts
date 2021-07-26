/**
 * Format current number for $xxx.xxx.xxx (Ex: 1234 = $1.234)
 */
const formatToAmount = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default formatToAmount
