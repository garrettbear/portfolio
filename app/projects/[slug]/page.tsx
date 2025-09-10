import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectById, getAllProjects } from "@/lib/projects";
import ProjectList from "@/components/ProjectList";
import { parseUrlsInText } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectById(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter((p) => p.id !== project.id);

  return (
    <div className="min-h-screen">
      <main className="p-4 md:p-8">
        {/* Navigation */}
        <nav className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/60 hover:text-white/80 transition-colors group"
          >
            <span className="font-inter group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span className="ml-2">Back to home</span>
          </Link>
        </nav>

        {/* Project Header */}
        <header className="mb-12">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-4xl md:text-5xl font-agrandir">
              {project.title}
            </h1>
            <span className="text-lg text-white/60">{project.year}</span>
          </div>

          <p className="text-xl text-white/80 mb-6 max-w-3xl">
            {parseUrlsInText(project.longDescription)}
          </p>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors group"
              >
                <span className="font-inter group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <span className="ml-2">View Live</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors group"
              >
                <span className="font-inter group-hover:translate-x-1 transition-transform">
                  →
                </span>
                <span className="ml-2">View Code</span>
              </a>
            )}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 text-sm rounded-full text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Other Projects */}
        <ProjectList
          projects={otherProjects}
          variant="project-page"
          title="Other Projects"
        />
      </main>

      <footer className="text-xs text-center p-3 mt-8">
        &copy; {new Date().getFullYear()} GarrettBear
      </footer>
    </div>
  );
}
