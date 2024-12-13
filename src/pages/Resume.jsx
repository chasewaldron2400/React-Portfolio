import html2canvas from 'html2canvas';

export default function Resume() {
  // Function to capture the page and trigger download as JPG
  const handleDownload = () => {
    // Select the element to capture (e.g., the entire page)
    const element = document.getElementById('resume-container');

    if (element) {
      // Use html2canvas to render the element as a canvas
      html2canvas(element).then((canvas) => {
        // Convert the canvas to a data URL (JPG format)
        const imageUrl = canvas.toDataURL('image/jpeg');

        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'downloaded-page.jpg'; // The name of the image file
        link.click(); // Programmatically click the link to trigger the download
      });
    } else {
      console.error("Element not found!");
    }
  };

  return (
    <div id="resume-container" className="resume-container">
      <header className="resume-header">
        <h1>Chase Waldron</h1>
        <p>Web Developer | JavaScript | React | Full-Stack Developer</p>
        <div className="contact-info">
          <p>Email: chasew2400@gmail.com</p>
          <p>Phone: (815) 999-7697</p>
          <p>Location: Chicago, Illinois</p>
          <p>LinkedIn: www.linkedin.com/in/chase-waldron</p>
          <p>GitHub: github.com/chasewaldron2400</p>
        </div>
      </header>

      <section className="resume-section">
        <h2>Summary</h2>
        <p>
          Highly motivated web developer with a passion for building dynamic and
          user-friendly websites. Experienced in JavaScript, React, and
          full-stack development. Dedicated to continuous learning and
          collaborating on innovative projects that push the limits of web
          technologies.
        </p>
      </section>

      <section className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML5, CSS3</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
          <li>Responsive Design</li>
        </ul>
      </section>
      <section className="resume-section">
        <h2>Education</h2>
        <div className="education">
          <h3>Fullstack Coding Certfication</h3>
          <p className="school">Northwestern University | Evanston, Illinois</p>
          <p className="degree-duration">Graduated: November 2024</p>
          <p className="degree-duration">Grade: 91%</p>
        </div>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <div className="job">
          <h3>Cook</h3>
          <p className="job-company">East Bank Club | Chicago, Illinois</p>
          <p className="job-duration">April 2022 - Present</p>
          <ul>
            <li>
              Managed kitchen operations in a fast-paced environment while
              maintaining attention to detail and following safety guidelines.
            </li>
            <li>
              Worked collaboratively with team members to prepare high-quality
              meals and maintain clean workspaces.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Cook</h3>
          <p className="job-company">Wings Etc | Minooka, Illinois</p>
          <p className="job-duration">April 2019 - May 2022</p>
          <ul>
            <li>
              Assisted in food preparation and maintained efficient cooking
              processes, ensuring timely service.
            </li>
            <li>
              Gained valuable team collaboration skills in a fast-paced,
              customer-driven environment.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Warehouse Worker</h3>
          <p className="job-company"> Grainger | Minooka, Illinois</p>
          <p className="job-duration">July 2021 - September 2021</p>
          <ul>
            <li>
              Packaged and scanned products on an assembly line, adhering to
              production deadlines
            </li>
            <li>
              Developed attention to detail and organizational skills that are
              transferable to coding and project management.
            </li>
          </ul>
        </div>
        
        
      </section>

      <button onClick={handleDownload}>Download Resume as JPG</button>

    </div>
  );
}
