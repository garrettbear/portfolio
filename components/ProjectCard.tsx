import Link from "next/link";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  variant?: "homepage" | "project-page";
}

export default function ProjectCard({
  project,
  variant = "homepage",
}: ProjectCardProps) {
  const isHomepage = variant === "homepage";

  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group block transition-all duration-300 hover:scale-[1.02] ${
        isHomepage
          ? "bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10"
          : "bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10"
      }`}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className={`font-agrandir ${isHomepage ? "text-xl" : "text-lg"}`}>
            {project.title}
          </h3>
          <span className="text-sm text-white/60">{project.year}</span>
        </div>

        <p className={`text-white/80 ${isHomepage ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, isHomepage ? 3 : 2).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/10 text-xs rounded-full text-white/70"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (isHomepage ? 3 : 2) && (
            <span className="px-2 py-1 bg-white/10 text-xs rounded-full text-white/70">
              +{project.technologies.length - (isHomepage ? 3 : 2)} more
            </span>
          )}
        </div>

        <div className="flex items-center text-sm text-white/60 group-hover:text-white/80 transition-colors">
          <span className="font-inter">→</span>
          <span className="ml-1">View project</span>
        </div>
      </div>
    </Link>
  );
}
