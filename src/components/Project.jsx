// eslint-disable-next-line react/prop-types
const Project = ({ name, description, repoLink, image }) => {
  return (
    <div className="project">
      <img src={image} alt={name} className="project-image" />
      <h1 className="project-title">{name}</h1>
      <p className="project-description">{description}</p>
      <a href={repoLink}>GitHub Link</a>
    </div>
  );
};

export default Project;

