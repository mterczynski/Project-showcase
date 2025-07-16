import { commercialProjects } from "@/data";
import "../css/commercial.css";
import { CommercialProjectCard } from "./Card";
import type { Project } from "@/types/types";
function Commercial_projects() {
  return (
    <main className="commercial_main index">
      <section>
        <h1 className="commercial_main_h1">Commercial Projects</h1>
        <div className="grid_main">
          {commercialProjects.map((project: Project, i: number) => (
            <CommercialProjectCard
              key={i}
              title={project.title}
              image={project.image}
              alt={`${project.title} project preview`}
              description={project.description}
              tech={project.tech}
              links={project.links}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Commercial_projects;
