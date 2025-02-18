import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData, Outlet } from "@remix-run/react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

import type { BlogPost } from "~/types/blog";
import { Header } from "~/components/header";
import type { Project } from "~/types/project";

export const loader: LoaderFunction = async () => {
    // Load blog posts first
    const postsPath = path.join(process.cwd(), "app", "content", "blog");
    const posts = fs.readdirSync(postsPath)
        .filter(filename => filename.endsWith(".md"))
        .map(filename => {
            const filePath = path.join(postsPath, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);
            const htmlContent = marked(content);

            return {
                slug: filename.replace(".md", ""),
                title: data.title,
                date: data.date,
                tags: data.tags,
                excerpt: data.excerpt || "",
                content: htmlContent
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Load projects and enrich with blog post data
    const projectsPath = path.join(process.cwd(), "app", "content", "project");
    const projects = fs.readdirSync(projectsPath)
        .filter(filename => filename.endsWith(".json"))
        .map(filename => {
            const filePath = path.join(projectsPath, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const projectData = JSON.parse(fileContent);

            // If there's a linked blog post, get its data
            if (projectData.blogPost) {
                const linkedPost = posts.find(post => post.slug === projectData.blogPost);
                if (linkedPost) {
                    return {
                        ...projectData,
                        slug: filename.replace(".json", ""),
                        description: linkedPost.excerpt,
                        tags: linkedPost.tags,
                        date: linkedPost.date
                    };
                }
            }

            return {
                ...projectData,
                slug: filename.replace(".json", "")
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return Response.json({ posts, projects });
};

export default function App() {
    const { posts, projects } = useLoaderData<{
        posts: BlogPost[],
        projects: Project[]
    }>();

    return (
        <div className="min-h-screen bg-linear-to-b from-theme-bg to-theme-bg-secondary text-white">
            <Header posts={posts} projects={projects} />
            <div className="mx-auto">
                <Outlet context={{ posts, projects }} />
            </div>
        </div>
    );
}
