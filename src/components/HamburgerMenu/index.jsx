import { AiOutlineClose } from 'react-icons/ai';

const HamburgerMenu = ({ handleHamburger }) => {
  return (
    <nav>
      <AiOutlineClose onClick={() => handleHamburger()} />
      <ul>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#tech'>Tech</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </nav>
  )
};

export default HamburgerMenu;
