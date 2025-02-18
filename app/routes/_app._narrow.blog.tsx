import { type LoaderFunction } from "@remix-run/node";
import { useLoaderData, Outlet } from "@remix-run/react";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

import type { BlogPost } from "~/types/blog";

export const loader: LoaderFunction = async () => {
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

    return { posts };
};

export default function Blog() {
    const { posts } = useLoaderData<{ posts: BlogPost[] }>();

    return (
        <div>
            <Outlet context={{ posts }} />
        </div>
    );
}