import { json, type LoaderFunction } from "@remix-run/node";
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

        return json({
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
        <div className="max-w-4xl mx-auto py-8 px-4">
            <article>
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="text-sm text-gray-400">
                        {post.date} • {post.tags.join(", ")}
                    </div>
                </header>
                <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
} 