import { HighlightProject, NormalProject } from "./Projects/Project";
import { highlightProjects } from "./ProjectsList";

import "./styles/css/Projects.css";

const Projects = ({ page, initial }) => {
  return (
    <div
      id="projects"
      className={
        initial ? "" : page === "projects" ? "show-projects" : "hide-projects"
      }
    >
      <h1>Highlights</h1>
      <div id="highlight-projects-container">
        {highlightProjects.map((p) => (
          <HighlightProject key={p[0]} data={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
