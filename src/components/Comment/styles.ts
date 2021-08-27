import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
`

export const Avatar = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
`

export const Comment = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 ${theme.spacings.xsmall};
    border-bottom: ${theme.border.default};
    border-color: ${theme.colors.gray100};
    margin-bottom: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
  `}
`

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Name = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    margin-right: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray500};
  `}
`

export const SmallText = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray600};
    ${media.lessThan('medium')`
      display:block;
    `}
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};
    min-height: 50px;
  `}
`
