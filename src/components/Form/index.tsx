import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { sendContactMail } from '../../services/sendMail'
import { Button } from '../Button'
import { Separator } from '../Separator'
import { TextAreaInput } from '../TextAreaInput'
import { TextInput } from '../TextInput'

import {
  FormContainerStyles,
  FormSeparatorBoxStyles,
  FormTitleBoxStyles,
  FormTitleStyles
} from './styles'

export const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topium, setTopium] = useState('')
  const [question, setQuestion] = useState('')

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

    if (!name || !email || !topium || !question) {
      toast('Preencha todos os campos para enviar sua dúvida!', {
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
      await sendContactMail(name, email, topium, question)
      setName('')
      setEmail('')
      setTopium('')
      setQuestion('')

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: '#00b600',
          color: '#fff'
        }
      })
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: '#d60000',
          color: '#fff'
        }
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={FormContainerStyles}>
      <div className={FormTitleBoxStyles}>
        <h3 className={FormTitleStyles}>FALE CONOSCO</h3>
      </div>
      <TextInput
        label="NOME"
        name="name"
        onChange={({ target }) => setName(target.value)}
        value={name}
      />
      <TextInput
        label="EMAIL"
        name="email"
        onChange={({ target }) => setEmail(target.value)}
        value={email}
      />
      <TextInput
        label="TOPICO"
        name="topium"
        onChange={({ target }) => setTopium(target.value)}
        value={topium}
      />
      <TextAreaInput
        label="ESCREVA SUA DÚVIDA"
        name="write your question"
        onChange={({ target }) => setQuestion(target.value)}
        value={question}
      />
      <Button
        variant="secondary"
        size="full"
        className="-mt-1"
        type="submit"
        disabled={loading}
      >
        Enviar
      </Button>
      <div className={FormSeparatorBoxStyles}>
        <Separator variant="secondary" />
      </div>
    </form>
  )
}
