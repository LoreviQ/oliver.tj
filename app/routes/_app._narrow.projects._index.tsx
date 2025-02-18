import { type LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

import type { Project } from "~/types/project";
import { FixedWidthHero } from "~/components/style";
import { InfoCircleIcon } from "~/components/icons";


export const loader: LoaderFunction = async () => {
    const projectsPath = path.join(process.cwd(), "app", "content", "project");
    const projects = fs.readdirSync(projectsPath)
        .filter(filename => filename.endsWith(".json"))
        .map(filename => {
            const filePath = path.join(projectsPath, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const projectData = JSON.parse(fileContent);
            let blogData = undefined;

            // If there's a linked blog post, get its metadata
            if (projectData.blogPost) {
                const blogPath = path.join(process.cwd(), "app", "content", "blog", `${projectData.blogPost}.md`);
                try {
                    const blogContent = fs.readFileSync(blogPath, "utf-8");
                    const { data } = matter(blogContent);
                    blogData = {
                        date: data.date,
                        tags: data.tags,
                        excerpt: data.excerpt
                    };
                } catch (error) {
                    console.warn(`Blog post ${projectData.blogPost} not found for project ${filename}`);
                }
            }

            return {
                ...projectData,
                slug: filename.replace(".json", ""),
                blogData
            };
        });

    return Response.json({ projects });
};

export default function ProjectIndex() {
    const { projects } = useLoaderData<{
        projects: (Project & { blogData?: { date: string; tags: string[]; excerpt?: string } })[]
    }>();

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
                        blogData={project.blogData}
                    />
                ))}
            </div>
        </>
    );
}

interface ProjectCardProps {
    project: Project;
    blogData?: {
        date: string;
        tags: string[];
        excerpt?: string;
    };
}
function ProjectCard({ project, blogData }: ProjectCardProps) {
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
            {blogData && (
                <>
                    <div className="text-sm text-theme-text-muted">
                        {new Date(blogData.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </div>
                    <div className="text-sm text-theme-text-muted">
                        {blogData.tags.join(", ")}
                    </div>
                    {blogData.excerpt && (
                        <p className="text-theme-text-secondary mt-4 line-clamp-3">
                            {blogData.excerpt}
                        </p>
                    )}
                </>
            )}
        </div>
    );
} 