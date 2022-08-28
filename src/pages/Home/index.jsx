import ReactTypingEffect from "react-typing-effect";

import { AiOutlineArrowDown } from "react-icons/ai";

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
          </div>
          <AiOutlineArrowDown className="arrow" />
      </div>
    </section>
  )
}

export default Home;
