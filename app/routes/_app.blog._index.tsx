import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

import type { BlogPost } from "~/types/blog";
import { BlogSnippet } from "~/components/BlogSnippet";

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
            <h1 className="font-display text-4xl font-bold text-theme-text mb-8">Blog Posts</h1>
            <div className="space-y-8">
                {posts.map(post => (
                    <BlogSnippet key={post.slug} post={post} />
                ))}
            </div>
        </>
    );
} 