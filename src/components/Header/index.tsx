import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Icon htmlFor="hamburger">&#9776;</S.Icon>
    <S.Toggle type="checkbox" id="hamburger" />
    <S.Items id="items">
      <S.MenuItem>
        <img src="img/logo.png" alt="Beer Or Coffee" />
      </S.MenuItem>
      <S.MenuItem>Espaços de Coworking</S.MenuItem>
      <S.MenuItem>Planos</S.MenuItem>
      <S.MenuItem>Descontos</S.MenuItem>
      <S.MenuItem style={{ flex: 3 }}>
        <S.HeaderButton>Adiquirir um Plano</S.HeaderButton>
        <S.Subitem>Empresas</S.Subitem>
        <S.HeaderButton color="white">Oi, Thiago</S.HeaderButton>
      </S.MenuItem>
    </S.Items>
  </S.Wrapper>
)

export default Header
