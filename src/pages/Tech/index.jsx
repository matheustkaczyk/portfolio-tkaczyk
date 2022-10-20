import { ReactComponent as ReactLogo } from '../../assets/images/react.svg';
import { ReactComponent as ReduxLogo } from '../../assets/images/redux.svg';
import { ReactComponent as HtmlLogo } from '../../assets/images/html.svg';
import { ReactComponent as CssLogo } from '../../assets/images/css.svg';
import { ReactComponent as SassLogo } from '../../assets/images/sass.svg';
import { ReactComponent as JavascriptLogo } from '../../assets/images/javascript.svg';
import { ReactComponent as TypescriptLogo } from '../../assets/images/typescript.svg';
import { ReactComponent as NodeLogo } from '../../assets/images/nodejs.svg';
import { ReactComponent as ExpressLogo } from '../../assets/images/express.svg';
import { ReactComponent as NestLogo } from '../../assets/images/nestjs.svg';
import { ReactComponent as MongoLogo } from '../../assets/images/mongodb.svg';
import { ReactComponent as MySQLLogo } from '../../assets/images/mysql.svg';


const Tech = () => {
  const techs = [
    {
      name: 'React',
      logo: <ReactLogo />,
    },
    {
      name: 'Redux',
      logo: <ReduxLogo />,
    },
    {
      name: 'HTML',
      logo: <HtmlLogo />,
    },
    {
      name: 'CSS',
      logo: <CssLogo />,
    },
    {
      name: 'Sass',
      logo: <SassLogo />,
    },
    {
      name: 'JavaScript',
      logo: <JavascriptLogo />,
    },
    {
      name: 'Typescript',
      logo: <TypescriptLogo />,
    },
    {
      name: 'Node.js',
      logo: <NodeLogo />,
    },
    {
      name: 'Express',
      logo: <ExpressLogo />,
    },
    { 
      name: 'Nest.js',
      logo: <NestLogo />,
    },
    {
      name: 'MongoDB',
      logo: <MongoLogo />,
    },
    {
      name: 'MySQL',
      logo: <MySQLLogo />,
    },
  ]

  return(
    <section className="tech-wrapper">
      <div className="tech">
        <h1>Tech Stack</h1>
        <p>Here is a list of the technologies I am most proficient in.</p>
        <div className="tech-list">
          {techs.map((tech, index) => {
            return(
              <div key={index} className="tech-item">
                {tech.logo}
              </div>
            )
          }
          )}
        </div>
      </div>
    </section>
  )
}

export default Tech;
