import * as S from './styles'

const Header = () => (
  <nav id="hamnav">
    <label htmlFor="hamburger">&#9776;</label>
    <input type="checkbox" id="hamburger" />

    <div id="hamitems">
      <a href="a.html">First</a>
      <a href="b.html">Second</a>
      <a href="c.html">Third</a>
      <a href="d.html">Forth</a>
    </div>
  </nav>
)

export default Header
