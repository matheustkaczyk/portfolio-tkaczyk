import easybank from '../../assets/images/easybank.png';
import trivia from '../../assets/images/kartik.png';
import splitter from '../../assets/images/splitter.png';
import qrcode from '../../assets/images/qrcode.png';

const Projects = () => {
  const projects = [
    {
      name: 'Easybank',
      url: 'https://easybank-bsk1zeve9-matheustkaczyk.vercel.app/',
      image: easybank,
    },
    {
      name: 'Trivia',
      url: 'https://project-trivia-4beq4455q-matheustkaczyk.vercel.app/',
      image: trivia,
    },
    {
      name: 'Splitter',
      url: 'https://splitter-challenge-l9x093db2-matheustkaczyk.vercel.app/',
      image: splitter,
    },
    {
      name: 'QrCode',
      url: 'https://qrcode-gen-tka.netlify.app/',
      image: qrcode,
    }
  ];

  return(
    <section className="projects-wrapper">
      <h2>Projects</h2>
      <p>Here's a list of a few projects that i made.</p>
      <div className="projects">
        {
          projects.map(project => (
              <div className='project-card'>
                <div className='project-image'>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} />
                  </a>
                </div>
              </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects;
