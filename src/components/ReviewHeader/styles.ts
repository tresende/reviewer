import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.gray500};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Location = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    ${media.lessThan('small')`
      display: block;
    `}
  `}
`

export const Divider = styled.hr`
  ${({ theme }) => css`
    border: 0;
    margin: 1rem 0;
    border-top: ${theme.border.default};
    border-color: ${theme.colors.gray100};
  `}
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.lessThan('medium')`
    flex-direction: column;
    align-items: baseline;
  `}
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 4;
`

export const NumReview = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex: 2;
  ${media.lessThan('medium')`
    margin-top:1rem;
    width: 100%;
  `}
`
