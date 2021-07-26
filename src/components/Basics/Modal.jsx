import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'
import { CloseIcon, Content, GlobalStyles, Root } from './Modal.styles'

const TRANSITION_DURATION = 200
const defaultStyle = {
  transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
  opacity: 0
}
const transitionStyles = {
  exited: { opacity: 0 },
  entered: { opacity: 1 }
}

/**
 * The Modal's component.
 */
const Modal = props => {
  const { children, maxWidth, open, position, onClose, onOpenCallback } = props
  const rootRef = useRef(undefined)
  const handleClick = event => event.stopPropagation()
  const handleEscape = event => {
    if (event.key !== 'Escape' || event.keyCode !== 27) {
      return
    }

    onClose(event)
  }
  const element = document.getElementById('__portal')

  useEffect(() => {
    if (!open || !rootRef.current) {
      return
    }

    if (open) {
      onOpenCallback()
    }

    rootRef.current.focus()
  }, [open])

  if (!element) {
    return null
  }

  return createPortal(
    <>
      <GlobalStyles show={open} />
      <Transition mountOnEnter unmountOnExit in={open} timeout={TRANSITION_DURATION}>
        {state => (
          <Root
            ref={rootRef}
            show={open}
            style={{ ...defaultStyle, ...transitionStyles[state] }}
            tabIndex="-1"
            onClick={onClose}
            onKeyDown={handleEscape}
          >
            <Content maxWidth={maxWidth} position={position} onClick={handleClick}>
              <CloseIcon onClick={onClose} />
              {children}
            </Content>
          </Root>
        )}
      </Transition>
    </>,
    element
  )
}

Modal.defaultProps = {
  maxWidth: '500px',
  onClose: () => undefined,
  onOpenCallback: () => undefined
}
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.string,
  open: PropTypes.bool.isRequired,
  position: PropTypes.string,
  onClose: PropTypes.func,
  onOpenCallback: PropTypes.func
}

export default Modal
