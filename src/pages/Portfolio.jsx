import Project from "../components/Project"

const projects = [
  {
    name: 'BrainBuster',
    description: 'BrainBuster is a trivia game built using React and mutliple APIs for trivia questions and avatar creation.',
    repoLink: 'https://github.com/chasewaldron2400/Employee-Tracker',
    image: '/assets/static/brainBusterSample.jpg',
  },
  {
    name: 'Employee Tracker',
    description: 'A command-line application from scratch to manage a companys employee database, using Node.js, Inquirer, and PostgreSQL',
    repoLink: 'https://github.com/chasewaldron2400/Employee-Tracker',
    image: '/assets/static/employeePayrollTracker.jpg',
  },
  {
    name: 'Find Your Fur Baby',
    description: 'This project, developed by Pawsitive Connections, allows users to take a quiz to determine what breed fits best with the user. With the breed matches, the user can find adoptable dogs in the surrounding area or anywhere in the United States. The dog quiz matches the user with three breeds based on their unique needs, preferences, and lifestyle. The questions include dog attributes such as suitability with children and other pets, shedding, trainability, energy, and barking frequency.',
    repoLink: 'https://github.com/chasewaldron2400/locaLink',
    image: '/assets/static/pawsitive.jpg',
  },
  {
    name: 'Weather Forecast',
    description: 'This project is a Weather Frorecast application that shows the 5 day forecast using JavaScropt and API calls.',
    repoLink: 'https://github.com/chasewaldron2400/Weather-Forecast',
    image: '/assets/static/weatherForecastScreenshot.jpg',
  },
  {
    name: 'Employee Payroll Tracker',
    description: 'This project is an online employee payroll tracker made with javascript. Enter in an employees first name, last name, and salary to enter the data into the table.',
    repoLink: 'https://github.com/chasewaldron2400/Employee-Payroll-Tracker',
    image: '/assets/static/employeePayrollTracker.jpg',
  },
  {
    name: 'Book Search Engine',
    description: 'This project is a website that allows you to search books and save them. This website was made with starter code and converted to be working with graphql.',
    repoLink: 'https://github.com/chasewaldron2400/BookSearchEngine',
    image: '/assets/static/bookSearchEngine.jpg',
  },
  {
    name: 'Horiseon HTML Demo',
    description: 'This project shows how we can make websites more accessable for search engines. In addition to the search engine benefits, making websites more accessable helps companies avoid litigation, which is a possibility if people with disabilities cant access a website.',
    repoLink: 'https://github.com/chasewaldron2400/Horiseon-HTML-Demo',
    image: '/assets/static/htmlDemo.png',
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
