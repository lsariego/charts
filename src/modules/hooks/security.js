import { useMemo } from 'react'
import { getFromCookie } from '../storages/cookies'

/**
 * Custom hook to get the access token.
 */
export const useAccessToken = () => {
  return useMemo(() => {
    const accessToken = getFromCookie('access_token')

    // when the SSO service is down, the access token is a stringify null.
    if (!accessToken || accessToken === 'null') {
      return null
    }

    return accessToken
  }, [])
}
