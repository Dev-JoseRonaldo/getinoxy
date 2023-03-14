import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { subscribeNewsletter } from '../../services/subscribeNewsletter'
import { Button } from '../Button'
import { TextInput } from '../TextInput'

import {
  FooterBoxStyles,
  FooterContentContainerStyles,
  FooterLeftSideBoxInputStyles,
  FooterLeftSideButtonStyles,
  FooterLeftSideContainerStyles,
  FooterLeftSideInputStyles,
  FooterLeftSideTitleStyles,
  FooterTitleContainerStyles,
  FooterTitleSpanStyles,
  FooterTitleStyles
} from './styles'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g

    if (!regEx.test(email) && email !== '') {
      toast('Preencha um Email válido!', {
        style: {
          background: '#d60000',
          color: '#ffffff',
          textAlign: 'center'
        }
      })
      return
    }

    if (!email) {
      toast('Digite seu e-mail para receber as novidades!', {
        style: {
          background: '#d60000',
          color: '#ffffff',
          textAlign: 'center'
        }
      })
      return
    }

    try {
      setLoading(true)
      await subscribeNewsletter(email)
      setEmail('')

      toast('Inscrição realizada com sucesso!', {
        style: {
          background: '#00b600',
          color: '#fff'
        }
      })
    } catch (error) {
      toast(
        'Ocorreu um erro ao tentar realizar sua inscrição. Tente novamente!',
        {
          style: {
            background: '#d60000',
            color: '#fff'
          }
        }
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={FooterBoxStyles}>
      <div className={FooterContentContainerStyles}>
        <div className={FooterTitleContainerStyles}>
          <h3 className={FooterTitleStyles}>
            <span className={FooterTitleSpanStyles}>Respire</span> {''}
            Melhor
          </h3>
        </div>

        <div className={FooterLeftSideContainerStyles}>
          <span className={FooterLeftSideTitleStyles}>PROCURA NOVIDADES?</span>
          <form
            onSubmit={handleSubmit}
            className={FooterLeftSideBoxInputStyles}
          >
            <TextInput
              name="Digite seu email"
              label="Digite seu email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              className={FooterLeftSideInputStyles}
            />
            <Button
              size="flexible"
              variant="primary"
              className={FooterLeftSideButtonStyles}
              disabled={loading}
            >
              Inscrever-se
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
