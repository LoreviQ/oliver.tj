import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

interface BlogPost {
    title: string;
    date: string;
    tags: string[];
    content: string;
}

export const loader: LoaderFunction = async ({ params }) => {
    const { slug } = params;
    const filePath = path.join(process.cwd(), "app", "content", "blog", `${slug}.md`);

    try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        const htmlContent = marked(content);

        return Response.json({
            post: {
                title: data.title,
                date: data.date,
                tags: data.tags,
                content: htmlContent
            }
        });
    } catch (error) {
        throw new Response("Not Found", { status: 404 });
    }
};

export default function BlogPost() {
    const { post } = useLoaderData<{ post: BlogPost }>();

    return (
        <article className="bg-theme-bg-card rounded-card p-8 shadow-card">
            <header className="mb-8">
                <h1 className="font-display text-4xl font-bold text-theme-text mb-4">{post.title}</h1>
                <div className="text-sm text-theme-text-muted">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {post.tags.join(", ")}
                </div>
            </header>
            <div
                className="prose prose-invert prose-headings:font-display prose-headings:text-theme-text prose-p:text-theme-text-secondary max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    );
} 