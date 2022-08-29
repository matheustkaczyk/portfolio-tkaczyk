import { ReactComponent as ProgrammingSvg } from '../../assets/images/programming.svg';
import { ReactComponent as KnowledgeSvg } from '../../assets/images/knowledge.svg';

const About = () => {
  return(
    <section className="about-wrapper" id="about">
      <div className="about">
        <div className='about-heading'>
          <ProgrammingSvg />
          <h4>I'm very passionate about science, technology and programming.</h4>
          <hr />
        </div>
        <div className='about-info'>
          <p>I recently finished a web development course at <a className='trybe' href='https://www.betrybe.com/' target={'__blank'}>Trybe</a>, where for the last year i've been learning and 
          practicing a set of technologies about fullstack web development. Right now, i'm studying<strong> Computer Science</strong> at <a className='estacio' href='https://www.estacio.br' target={'__blank'}>Estácio</a>.</p>
          <p>I'm just a computer nerd that loves to read and play competitive PC games.</p>
        </div>
        <KnowledgeSvg className="knowledge-svg" />
      </div>
    </section>
  )
}

export default About;
