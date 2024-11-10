import Project from "../components/Project"

const projects = [
  {
    name: 'Employee Tracker',
    description: 'A command-line application from scratch to manage a companys employee database, using Node.js, Inquirer, and PostgreSQL',
    repoLink: 'https://github.com/chasewaldron2400/Employee-Tracker',
    image: '',
  },
  {
    name: 'Find Your Fur Baby',
    description: '',
    repoLink: 'https://github.com/chasewaldron2400/locaLink',
    image: '',
  },
  {
    name: '',
    description: '',
    repoLink: '',
    image: '',
  },
  {
    name: '',
    description: '',
    repoLink: '',
    image: '',
  },
  {
    name: '',
    description: '',
    repoLink: '',
    image: '',
  },
  {
    name: '',
    description: '',
    repoLink: '',
    image: '',
  },

]

export default function Portfolio() {
  return (
    <div className="portfolioName">
      {projects.map((projects, index) => (
        <Project 
        key={index}
        name={projects.name}
        description={projects.description}
        repoLink={projects.repoLink}
        image={projects.image}/>
      ))}
    </div>
  )
}
