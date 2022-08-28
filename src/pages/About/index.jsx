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
          <p>I recently finished the web development course at <a className='trybe' href='https://www.betrybe.com/' target={'__blank'}>Trybe</a>, where for the last year i've been learning and 
          practicing all the technologies about the fullstack web development. Right now, i'm studying Computer Science at <a className='estacio' href='https://www.estacio.br' target={'__blank'}>Estácio</a></p>
        </div>
        <KnowledgeSvg className="knowledge-svg" />
      </div>
    </section>
  )
}

export default About;
