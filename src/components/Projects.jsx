import { HighlightProject, NormalProject } from "./Projects/Project";
import { highlightProjects, normalProjects } from "./ProjectsList";

import "./styles/css/Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="show-projects">
      <h1>Highlights</h1>
      <div id="highlight-projects-container">
        {highlightProjects.map((p) => (
          <HighlightProject key={p[0]} data={p} />
        ))}
      </div>
      <h2>Other projects</h2>
      <div id="normal-projects-container">
        {normalProjects.map((p) => (
          <NormalProject key={p[0]} data={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
