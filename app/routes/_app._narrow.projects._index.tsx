import { Link, useOutletContext } from "@remix-run/react";

import type { Project } from "~/types/project";
import { FixedWidthHero } from "~/components/style";
import { InfoCircleIcon } from "~/components/icons";

export default function ProjectIndex() {
    const { projects } = useOutletContext<{ projects: Project[] }>();

    return (
        <>
            <FixedWidthHero
                prefixText="My"
                emphasisText="Projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                    />
                ))}
            </div>
        </>
    );
}

interface ProjectCardProps {
    project: Project;
}
function ProjectCard({ project }: ProjectCardProps) {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = "/images/default.png";
    };

    return (
        <div className="bg-theme-bg-card rounded-card p-6 shadow-card hover:shadow-card-hover transition-shadow">
            <div>
                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                        <img
                            src={project.logo || "/images/default.png"}
                            alt={`${project.name} logo`}
                            className="w-full h-full object-contain object-center"
                            onError={handleImageError}
                        />
                    </div>
                </a>
                <div className="flex items-start gap-2 mb-2">
                    <h2 className="font-display text-2xl font-bold text-theme-text flex-grow">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-theme-primary transition-colors"
                        >
                            {project.name}
                        </a>
                    </h2>
                    {project.blogPost && (
                        <Link
                            to={`/blog/${project.blogPost}`}
                            className="text-theme-text-muted hover:text-theme-primary transition-colors pt-1"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Read more about this project"
                        >
                            <InfoCircleIcon className="w-5 h-5" />
                        </Link>
                    )}
                </div>
            </div>
            {project.tags && (
                <div className="text-sm text-theme-text-muted">
                    {project.tags.join(", ")}
                </div>
            )}
            {project.description && (
                <p className="text-theme-text-secondary mt-4 line-clamp-3">
                    {project.description}
                </p>
            )}
        </div>
    );
} 