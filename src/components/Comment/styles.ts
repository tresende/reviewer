import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
  `}
`

export const Avatar = styled.img`
  ${({ theme }) => css`
    border-radius: 50%;
    height: 48px;
    width: 48px;
  `}
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
  ${({ theme }) => css``}
`

export const Verified = styled.span`
  ${({ theme }) => css``}
`

export const Date = styled.span`
  ${({ theme }) => css``}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const CommentHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
  `}
`

export const Score = styled.div`
  ${({ theme }) => css``}
`
