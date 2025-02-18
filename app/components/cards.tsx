import { Link } from "@remix-run/react";
import type { BlogPost } from "~/types/blog";
import type { Project } from "~/types/project";
import { InfoCircleIcon } from "~/components/icons";

interface BlogCardProps {
    post: BlogPost;
}
export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link to={`/blog/${post.slug}`} className="block">
            <article className="bg-theme-bg-card rounded-card p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <h2 className="font-display text-2xl font-bold text-theme-text mb-2 group">
                    <span className="hover:text-theme-primary transition-colors">
                        {post.title}
                    </span>
                </h2>
                <div className="text-sm text-theme-text-muted mb-4">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {post.tags.join(", ")}
                </div>
                {post.excerpt && <p className="text-theme-text-secondary">{post.excerpt}</p>}
            </article>
        </Link>
    );
}

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
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