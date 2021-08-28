import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${media.lessThan('small')`
    display: flex;
    flex-direction: column;
    text-align: center;
  `}
`

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    position: absolute;
    max-width: 24rem;
    top: 5rem;
    left: 4rem;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: bold;
    ${media.lessThan('small')`
      max-width: 100%;
      position: initial;
    `}
  `}
`

export const Image = styled.img`
  background-image: url('/img/error.png');
  background-position: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
`
