import { useState } from 'react'

import Button from 'components/Button'
import Stars from 'components/Stars'
import * as S from './styles'

type FormData = {
  [key: string]: string | number
}

const ReviewModal = () => {
  const [formData, setFormData] = useState<FormData>({} as FormData)

  const handleChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value })
  }
  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderBackground />
        <S.Avatar src="https://d3p07km83uit4h.cloudfront.net/portal/img/profile/avatar-blank.png?v=1051" />
      </S.Header>
      <S.Body>
        <S.Title>Olá Thiago, conte para comunidade como foi sua experiência em BSB Coworking.</S.Title>
        <Stars size={52} onClick={(index) => handleChange('score', index)} />
        <span>Sua avaliação e comentário ajuda a comunidade ;)</span>
        <S.Textarea
          onChange={(e) => handleChange('text', e.currentTarget.value)}
          placeholder="Escreva um comentário..."
        />
        <S.Buttons>
          <Button fillType="solid">Envie sua avaliação</Button>
        </S.Buttons>
      </S.Body>
      {JSON.stringify(formData)}
    </S.Wrapper>
  )
}

export default ReviewModal
