import { useMediaQuery, useTheme } from '@material-ui/core'

/**
 * Custom hook to check the viewport size.
 */
export const useViewportSize = () => {
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down('md'))
  const notSoSmall = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const desktop = useMediaQuery(theme.breakpoints.up('md'))

  return { isSmall: small && !desktop, isNotSoSMall: notSoSmall, isMedium: desktop }
}
