// FIXME: This file is just an example, you can take it as reference to make your own.

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onUpdateGuest } from '../Header/Header.actions'
import { useInput } from '../../components/Inputs/Inputs.hooks'
import Button from '../../components/Buttons/Button'
import Input from '../../components/Inputs/Input'
import { ButtonWrapper, Form, Highlight, message, Root, Separator, Title } from './Home.styles'

/**
 * The Home's container.
 */
const Home = () => {
  const dispatch = useDispatch()
  const { showForm } = useSelector(state => state.home)
  const { value: guestValue, onChange: handleChange } = useInput({ initialValue: '' })
  const handleSubmit = event => {
    event.preventDefault()

    dispatch(onUpdateGuest({ guest: guestValue }))
  }
  const disableSubmit = guestValue === ''

  return (
    <Root>
      <Title>
        Hey there! this is the <Highlight>Chilecompra - Frontend Boilerplate</Highlight>
      </Title>
      {showForm && (
        <>
          <message>So... who are you?</message>
          <Form onSubmit={handleSubmit}>
            <Input autoFocus placeholder="I am" value={guestValue} onChange={handleChange} />
            <Separator />
            <ButtonWrapper>
              <Button disabled={disableSubmit} variant="primary" type="submit">
                submit
              </Button>
            </ButtonWrapper>
          </Form>
        </>
      )}
    </Root>
  )
}

export default Home
