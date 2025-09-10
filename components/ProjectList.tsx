import { Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
  projects: Project[];
  variant?: "homepage" | "project-page";
  title?: string;
}

export default function ProjectList({
  projects,
  variant = "homepage",
  title,
}: ProjectListProps) {
  const isHomepage = variant === "homepage";

  return (
    <section className={`${isHomepage ? "mt-12" : "mt-8"}`}>
      {title && (
        <h2
          className={`font-agrandir mb-6 ${
            isHomepage ? "text-2xl" : "text-xl"
          }`}
        >
          {title}
        </h2>
      )}

      <div
        className={`grid gap-4 ${
          isHomepage
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} variant={variant} />
        ))}
      </div>
    </section>
  );
}
