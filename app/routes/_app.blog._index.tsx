import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt: string;
}

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
        <div className="max-w-4xl mx-auto py-8 px-4">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="space-y-8">
                {posts.map(post => (
                    <article key={post.slug} className="border-b border-gray-700 pb-8">
                        <h2 className="text-2xl font-semibold mb-2">
                            <a href={`/blog/${post.slug}`} className="hover:text-theme-primary">
                                {post.title}
                            </a>
                        </h2>
                        <div className="text-sm text-gray-400 mb-4">
                            {post.date} • {post.tags.join(", ")}
                        </div>
                        {post.excerpt && <p className="text-gray-300">{post.excerpt}</p>}
                    </article>
                ))}
            </div>
        </div>
    );
} 