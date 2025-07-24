import { PersonalProjectCard } from "@/components/Card";

import "../css/personal_pro.css";
import type { Project } from "@/types/types";
import { personalProjects } from "@/data";

const PersonalProjects = () => {
  return (
    <div className="personal_main">
      <h1 className="personal_main_h1">Personal projects</h1>
      <div className="grid_main">
        {personalProjects.map((project: Project, idx: number) => (
          <PersonalProjectCard
            key={idx}
            title={project.title}
            image={project.image}
            alt={`${project.title} project preview`}
            description={project.description}
            tech={project.tech}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
