import styled, { css } from 'styled-components'

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
    margin: 0 ${theme.spacings.xsmall};
    border-bottom: ${theme.border.default} #eee;
    margin-bottom: ${theme.spacings.small};
    padding-bottom: ${theme.spacings.small};
  `}
`

export const CommentInfo = styled.div`
  ${({ theme }) => css``}
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
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.xxsmall};
  `}
`

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Score = styled.div`
  ${({ theme }) => css``}
`
