import { ProjectCard_Two } from "@/components/Commercial_card";
import personalProject from "@/data/personalProject";
import "../css/personal_pro.css";
const PersonalProjects = () => {
  return (
    <div className="personal_main">
      <h1 className="personal_main_h1">Personal projects</h1>
      <div className="grid_main">
        {personalProject.map((project, idx) => (
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
