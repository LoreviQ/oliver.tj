import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData, Outlet } from "@remix-run/react";

import type { BlogPost } from "~/types/blog";
import { Header } from "~/components/header";
import type { Project } from "~/types/project";
import { loadConfig } from "~/utils/config-parser";
import { loadBlogPosts } from "~/utils/post-parser";
import { loadProjects } from "~/utils/project-parser";

export const loader: LoaderFunction = async () => {
    // Load blog posts, projects and config
    const posts = loadBlogPosts();
    const projects = loadProjects(posts);
    const config = loadConfig();

    return Response.json({ posts, projects, config });
};

export default function App() {
    const { posts, projects, config } = useLoaderData<{
        posts: BlogPost[],
        projects: Project[],
        config: Record<string, string>
    }>();

    return (
        <div className="min-h-screen bg-linear-to-b from-theme-bg to-theme-bg-secondary text-white">
            <Header posts={posts} projects={projects} config={config} />
            <div className="mx-auto">
                <Outlet context={{ posts, projects, config }} />
            </div>
        </div>
    );
}
