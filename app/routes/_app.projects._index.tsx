import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

import type { Project } from "~/types/project";
import { ProjectCard } from "~/components/ProjectCard";
import { HeadingHero } from "~/components/style";

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
            <HeadingHero
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