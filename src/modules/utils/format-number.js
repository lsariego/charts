/**
 * Format de current number on $xxx.xxx.xxx format
 */

const formatNumber = num => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default formatNumber
