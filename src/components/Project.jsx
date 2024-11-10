// eslint-disable-next-line react/prop-types
const Project = ({ name, description, repoLink, image }) => {
  return (
    <div className="project">
      <img src={image} className="project-image" />
      <h2 className="project-title">{name}</h2>
      <p className="project-description">{description}</p>
      <a href={repoLink}>GitHub Link</a>
    </div>
  );
};

export default Project;

