import { GiHamburgerMenu } from 'react-icons/gi';

import HamburgerMenu from '../HamburgerMenu';

const Header = () => {

  const handleHamburger = () => {
    const nav = document.getElementsByTagName('nav')[0];
    nav.classList.toggle('active');
    return;
  }

  return (
    <header id='header'>
      <div>
        <h2>Tkaczyk</h2>
        <GiHamburgerMenu onClick={() => handleHamburger()} />
        <HamburgerMenu handleHamburger={handleHamburger} />
      </div>
    </header>
  )
}

export default Header;
