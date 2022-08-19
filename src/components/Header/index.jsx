import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return(
    <header>
      <h2>Tkaczyk</h2>
      <GiHamburgerMenu />
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
