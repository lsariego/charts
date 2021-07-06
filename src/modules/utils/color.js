/**
 * Transforms a hexadecimal color and its corresponding alpha into the red-green-blue-alpha (RGBA) model.
 * The given color could have 3 or 6 digits.
 */
export const hexToRGBA = (color, alpha) => {
  let r = 0
  let g = 0
  let b = 0

  // 3 digits
  if (color.length === 4) {
    r = `0x${color[1]}${color[1]}`
    g = `0x${color[2]}${color[2]}`
    b = `0x${color[3]}${color[3]}`
  } else if (color.length === 7) {
    // 6 digits
    r = `0x${color[1]}${color[2]}`
    g = `0x${color[3]}${color[4]}`
    b = `0x${color[5]}${color[6]}`
  }

  alpha = alpha > 1 || alpha < 0 ? 1 : alpha

  return `rgba(${+r}, ${+g}, ${+b}, ${alpha})`
}
