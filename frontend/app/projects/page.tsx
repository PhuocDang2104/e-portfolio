export default function Page() {
  return (
    <>
      <h1>My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project Title</h3>
          <p>Project description goes here.</p>
          <div className="project-links">
            <a href="#">View Project</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </>
  );
}
