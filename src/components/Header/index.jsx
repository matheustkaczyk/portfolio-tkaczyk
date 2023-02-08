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
        <div>
          <a>Home</a>
          <a>About</a>
          <IconContext.Provider value={{ color: "green" }}>
            <a>
              <AiOutlineWhatsApp />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white" }}>
            <a>
              <AiOutlineMail />
            </a>
          </IconContext.Provider>
        </div>
      </nav>
    </header>
  )
}

export default Header;
