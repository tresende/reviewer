import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  align-items: center;
`

export const HeaderBackground = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    height: 7rem;
    border-radius: ${theme.border.mediumRadius} ${theme.border.mediumRadius} 0 0;
    padding: ${theme.spacings.small};
    background: linear-gradient(to top, rgba(250, 217, 97, 0.65), rgba(247, 107, 28, 0.65));
  `}
`

export const Avatar = styled.img`
  border-radius: 50%;
  border: 3px solid white;
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: 2rem;
`

export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 36rem;
    justify-content: space-between;
    padding: ${theme.spacings.medium};
  `}
`

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
  `}
`

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 6em;
    padding: 6px 12px;
    border-radius: ${theme.border.smallRadius};
  `}
`

export const Buttons = styled.div``
