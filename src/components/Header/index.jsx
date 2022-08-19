import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const handleHamburger = () => {
    const nav = document.getElementsByTagName('nav')[0];
    nav.classList.toggle('active');
  }

  return(
    <header>
      <div>
        <h2>Tkaczyk</h2>
        <GiHamburgerMenu onClick={() => handleHamburger()} />
      </div>
      <nav>
        <AiOutlineClose onClick={() => handleHamburger()} />
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
