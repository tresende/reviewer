import { useState } from 'react'

import Stars from 'components/Stars'
import Button from 'components/Button'
import UserReview from 'models/UserReview'
import { MIN_TEXT_LENGTH, DEFAULT_SCORE } from 'utils/constants'

import * as S from './styles'

type BodyProps = {
  handleSubmit: (data: UserReview) => void
}

const Body = ({ handleSubmit }: BodyProps) => {
  const [formData, setFormData] = useState<UserReview>({ score: DEFAULT_SCORE, text: '' } as UserReview)
  const [formEnable, setFormEnable] = useState(false)

  const handleChange = (field: string, value: string | number) => {
    const data = { ...formData, [field]: value }
    setFormData(data)
    setFormEnable(data?.text.length >= MIN_TEXT_LENGTH)
  }

  const onSave = () => handleSubmit(formData)

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
      <S.Buttons onClick={onSave}>
        <Button disabled={!formEnable} fillType="solid">
          Envie sua avaliação
        </Button>
      </S.Buttons>
    </S.Body>
  )
}

export default Body
