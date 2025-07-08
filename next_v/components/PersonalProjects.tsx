import { ProjectCard_Two } from "@/components/Card";
import personalProject from "@/data/personalproject.json";
import "../css/personal_pro.css";
import type { Project } from "@/types/types";
const PersonalProjects = () => {
  return (
    <div className="personal_main">
      <h1 className="personal_main_h1">Personal projects</h1>
      <div className="grid_main">
        {personalProject.map((project: Project, idx: number) => (
          <div className="column" key={idx}>
            <ProjectCard_Two
              title={project.title}
              image={project.image}
              alt={`${project.title} project preview`}
              description={project.description}
              tech={project.tech}
              links={project.links}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
