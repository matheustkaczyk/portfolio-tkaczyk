import easybank from '../../assets/images/easybank.png';
import trivia from '../../assets/images/kartik.png';
import splitter from '../../assets/images/splitter.png';
import qrcode from '../../assets/images/qrcode.png';
import webchat from '../../assets/images/webchat.png';
import finance from '../../assets/images/finance.png';
import trafalgar from '../../assets/images/trafalgar.png';

const Projects = () => {
  const projects = [
    {
      name: 'Easybank',
      url: 'https://easybank-bsk1zeve9-matheustkaczyk.vercel.app/',
      image: easybank,
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
      name: 'Finance',
      url: 'https://finance-tkaczyk.netlify.app/',
      image: finance,
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
      name: 'Trafalgar',
      url: 'https://trafalgar-tkaczyk.netlify.app/',
      image: trafalgar,
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
      name: 'Webchat',
      url: 'https://webchattkaczyk.netlify.app/',
      image: webchat,
      tags: ['HTML', 'SCSS', 'JavaScript', 'React', 'Node.js', 'Socket.io'],
    },
    {
      name: 'Trivia',
      url: 'https://project-trivia-4beq4455q-matheustkaczyk.vercel.app/',
      image: trivia,
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    },
    {
      name: 'Splitter',
      url: 'https://splitter-challenge-l9x093db2-matheustkaczyk.vercel.app/',
      image: splitter,
      tags: ['HTML', 'SCSS', 'JavaScript', 'React'],
    },
    {
      name: 'QrCode',
      url: 'https://qrcode-gen-tka.netlify.app/',
      image: qrcode,
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    }
  ];

  return (
    <section className="projects-wrapper">
      <h2>Projects</h2>
      <p>Here's a list of a few projects that i made.</p>
      <div className="projects">
        {
          projects.map(project => (
            <div className='project-card' key={project.name}>
              <div className='project-image'>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} />
                </a>
              </div>
              <div className='project-info'>
                <h3>{project.name}</h3>
                <div className='project-tags'>
                  {
                    project.tags.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects;
