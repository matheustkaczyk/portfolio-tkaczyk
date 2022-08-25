import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  const typingText = ['a Front-end developer!', 'a Back-end developer!', 'a Full-stack developer!', 'Matheus Tkaczyk Ribeiro'];

  return(
    <section className="home-wrapper">
      <div className="home">
          <h2>Hey! <span role='img' aria-label="waving">👋</span></h2>
          <div className="home-presentation">
            <h3>I'm <ReactTypingEffect
              text={typingText}
              speed={80}
              eraseDelay={1000}
              typingDelay={80}
            />
            </h3>
          </div>
      </div>
    </section>
  )
}

export default Home;
