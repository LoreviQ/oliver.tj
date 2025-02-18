import type { MetaFunction } from "@remix-run/node";
import { Link, useOutletContext } from "@remix-run/react";
import { Hero } from "~/components/style";
import { ProjectCard, BlogCard } from "~/components/cards";
import type { Project } from "~/types/project";
import type { BlogPost } from "~/types/blog";

export const meta: MetaFunction = () => {
    return [
        { title: "Oliver Jay" },
        { name: "description", content: "Personal website and portfolio" },
    ];
};

export default function Index() {
    const { projects, posts } = useOutletContext<{ projects: Project[], posts: BlogPost[] }>();

    const recentProjects = projects.slice(0, 3);
    const recentPosts = posts.slice(0, 3);

    return (
        <div>
            <Hero />
            <div className="mx-auto px-4 max-w-6xl space-y-16 pb-8">
                <section>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-display text-3xl font-bold text-theme-text">Recent Projects</h2>
                        <Link to="/projects" className="text-theme-primary hover:text-theme-primary-hover transition-colors">
                            View all projects →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recentProjects.map(project => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-display text-3xl font-bold text-theme-text">Recent Blog Posts</h2>
                        <Link to="/blog" className="text-theme-primary hover:text-theme-primary-hover transition-colors">
                            View all posts →
                        </Link>
                    </div>
                    <div className="space-y-8">
                        {recentPosts.map(post => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
} 