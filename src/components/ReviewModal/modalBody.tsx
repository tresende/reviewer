import { useState } from 'react'

import Stars from 'components/Stars'
import Button from 'components/Button'
import UserReview from 'models/UserReview'
import { MIN_TEXT_LENGTH, DEFAULT_SCORE } from 'utils/constants'

import * as S from './styles'

type BodyProps = {
  handleSubmit: (data: UserReview) => void
}
const INITIAL_STATE = { score: DEFAULT_SCORE, text: '' } as UserReview

const Body = ({ handleSubmit }: BodyProps) => {
  const [formData, setFormData] = useState<UserReview>(INITIAL_STATE)
  const [formEnable, setFormEnable] = useState(false)

  const handleChange = (field: string, value: string | number) => {
    const data = { ...formData, [field]: value }
    setFormData(data)
    setFormEnable(data?.text.length >= MIN_TEXT_LENGTH)
  }

  const onSave = () => {
    handleSubmit(formData)
    setFormData(INITIAL_STATE)
  }

  return (
    <S.Body>
      <S.Title>
        Olá <span>Thiago</span>, conte para comunidade como foi sua experiência em <span>BSB Coworking</span>.
      </S.Title>
      <Stars quantity={formData.score} size={52} onClick={(index) => handleChange('score', index)} />
      <span>Sua avaliação e comentário ajuda a comunidade ;)</span>
      <S.Textarea
        maxLength={280}
        onChange={(e) => handleChange('text', e.currentTarget.value)}
        placeholder="Escreva um comentário..."
      />
      <S.SocialMedia>
        <input id="twitter" type="checkbox" onChange={(e) => handleChange('twitter', e.currentTarget.value)} />
        <label htmlFor="twitter"> Desejo compartilhar no twitter 📢</label>
      </S.SocialMedia>
      <div>
        <Button onClick={onSave} disabled={!formEnable} fillType="solid">
          Envie sua avaliação
        </Button>
      </div>
    </S.Body>
  )
}

export default Body
