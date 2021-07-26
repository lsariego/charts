// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onShowGuestFormSuccess } from '../Home/Home.actions'
import Button from '../../components/Buttons/Button'
import { Actions, Highlight, Logo, LogoLink, Root, Welcome } from './Header.styles'

/**
 * The Header's container.
 */
const Header = () => {
  const dispatch = useDispatch()
  const { guest } = useSelector(state => state.header)
  const { showForm } = useSelector(state => state.home)
  const handleClick = () => dispatch(onShowGuestFormSuccess())

  return (
    <Root>
      <LogoLink to="/">
        <Logo alt="Chilecompra" src="/assets/images/logo_chilecompra.svg" />
      </LogoLink>
      <Welcome>
        {guest && (
          <>
            Welcome&nbsp;
            <Highlight>{guest}</Highlight>
          </>
        )}
        <Actions show={!showForm}>
          &nbsp;
          <Button size="sm" type="button" variant="secondary" onClick={handleClick}>
            Edit
          </Button>
        </Actions>
      </Welcome>
    </Root>
  )
}

export default Header
