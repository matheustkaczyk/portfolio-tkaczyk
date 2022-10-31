import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai';

const Header = () => {
  const handleHamburger = () => {
    const nav = document.getElementsByTagName('nav')[0];
    nav.classList.toggle('active');
  }

  return (
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
          <IconContext.Provider value={{ color: "green" }}>
            <li>
              <AiOutlineWhatsApp />
            </li>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white" }}>
            <li>
              <AiOutlineMail />
            </li>
          </IconContext.Provider>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
