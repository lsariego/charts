// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import BrandLayout from '../components/Layouts/BrandLayout'
import HeaderContainer from '../containers/Header/Header.container'
import { Image404, Root, Text } from './NotFound.styles'

/**
 * The NotFound' page.
 */
const NotFound = () => (
  <BrandLayout header={<HeaderContainer />}>
    <Root>
      <Text>La página solicitada no existe</Text>
      <Image404 alt="La página solicitada no existe" src="/assets/images/404.svg" />
    </Root>
  </BrandLayout>
)

export default NotFound
