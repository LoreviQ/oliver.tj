import { type LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

import type { BlogPost } from "~/types/blog";
import { FixedWidthHero } from "~/components/style";

export const loader: LoaderFunction = async () => {
    const postsPath = path.join(process.cwd(), "app", "content", "blog");
    const posts = fs.readdirSync(postsPath)
        .filter(filename => filename.endsWith(".md"))
        .map(filename => {
            const filePath = path.join(postsPath, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data } = matter(fileContent);

            return {
                slug: filename.replace(".md", ""),
                title: data.title,
                date: data.date,
                tags: data.tags,
                excerpt: data.excerpt || ""
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return Response.json({ posts });
};

export default function BlogIndex() {
    const { posts } = useLoaderData<{ posts: BlogPost[] }>();

    return (
        <>
            <FixedWidthHero
                prefixText="My"
                emphasisText="Blog"
            />
            <div className="space-y-8">
                {posts.map(post => (
                    <BlogSnippet key={post.slug} post={post} />
                ))}
            </div>
        </>
    );
}

interface BlogSnippetProps {
    post: BlogPost;
}

function BlogSnippet({ post }: BlogSnippetProps) {
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