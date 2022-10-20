import { ReactComponent as ProgrammingSvg } from '../../assets/images/programming.svg';
import { ReactComponent as KnowledgeSvg } from '../../assets/images/knowledge.svg';

const About = () => {
  return (
    <section className="about-wrapper" id="about">
      <div className="about">
        <div className='about-heading'>
          <ProgrammingSvg />
          <h4>I'm very passionate about science, technology and programming.</h4>
          <hr />
        </div>
        <div className='about-info'>
          <p>I'm just a computer nerd that loves to read and play competitive PC games.</p>
          <p>I recently finished a web development course at <a className='trybe' href='https://www.betrybe.com/' target={'__blank'}>Trybe</a>, where for the last year i've been learning and
            practicing a set of technologies about fullstack web development. Right now, i'm studying<strong> Computer Science</strong> at <a className='estacio' href='https://www.estacio.br' target={'__blank'}>Estácio</a>.</p>
          <p>I'm looking for my first opportunity to work as a software developer, i've worked many years
            on family business, working as bartender and doing general services in a ice factory, those jobs really helped me develop my speech and communication skills.
          </p>
          <p>Right now i'm on a carrer transition to technology, which is my true passion.</p>
        </div>
      </div>
    </section>
  )
}

export default About;
