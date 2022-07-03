import React, { FormEvent, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { ModalContainer, ModalContentContainer } from './ModalStyle'

interface ModalProps {
  id: string,
  children: React.ReactNode
}
interface ModalContentProps {
  children: React.ReactNode,
  onClose: () => void
}

export default function Modal({id, children}: ModalProps) {
  return (
    <ModalContainer id={id} className='modal'>
      {children}
    </ModalContainer>
  )
}

export const ModalContent = ({children, onClose}: ModalContentProps) => {
  const refContent = useRef<HTMLDivElement>(null)
  const onCloseModal = () => {
    if (onClose) {
      if(refContent.current){
        refContent.current.parentElement && refContent.current.parentElement.classList.remove("active");
      }
      onClose()
    }
  }
  return (
    <ModalContentContainer ref={refContent} className='modal__content'>
      {children}
      <span className='close-icon' onClick={onCloseModal}>
        <CloseIcon/>
      </span>
    </ModalContentContainer>
  )
}
