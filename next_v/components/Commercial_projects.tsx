import "../css/commercial.css";
import { ProjectCard } from "./Card";
import commercialProjects from "@/data/commercialProjects.json";
import type { Project } from "@/types/types";
function Commercial_projects() {
  return (
    <main className="commercial_main index">
      <section>
        <h1 className="commercial_main_h1">Commercial Projects</h1>
        <div className="grid_main">
          {commercialProjects.map((project: Project, i: number) => (
            // <div className="" key={i}>
            <ProjectCard
              key={i}
              title={project.title}
              image={project.image}
              alt={`${project.title} project preview`}
              description={project.description}
              tech={project.tech}
              links={project.links}
            />
            // </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Commercial_projects;
