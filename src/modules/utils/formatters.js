/**
 * Format current number for $xxx.xxx.xxx (Ex: 1234 = $1.234)
 */
import formatNumberRegex from '../../config/settings/regex'

const formatToAmount = num => {
  return num.toString().replace(formatNumberRegex, '$1.')
}

export default formatToAmount
