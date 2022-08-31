import ReactTypingEffect from "react-typing-effect";

import { AiOutlineArrowDown } from "react-icons/ai";

import CV from '../../assets/MATHEUS_TKACZYK.pdf';

const Home = () => {
  const typingText = ['Matheus Tkaczyk Ribeiro', 'a Front-end developer!', 'a Back-end developer!', 'a Full-stack developer!'];

  return(
    <section className="home-wrapper" id="home">
      <div className="home">
          <h2>Hey! <span role='img' aria-label="waving">👋</span></h2>
          <div className="home-presentation">
            <h3>I'm <ReactTypingEffect
              text={typingText}
              speed={80}
              eraseDelay={1000}
              eraseSpeed={100}
              typingDelay={80}
            />
            </h3>
            <a className="button" href={CV} download>Download my C.V.</a>
          </div>
          <a href="#about">
            <AiOutlineArrowDown className="arrow" />
          </a>
      </div>
    </section>
  )
}

export default Home;
