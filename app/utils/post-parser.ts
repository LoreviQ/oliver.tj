import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import type { BlogPost } from "~/types/blog";

export function loadBlogPosts(): BlogPost[] {
    const postsPath = path.join(process.cwd(), "app", "content", "blog");
    return fs.readdirSync(postsPath)
        .filter(filename => filename.endsWith(".md"))
        .map(filename => {
            const filePath = path.join(postsPath, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const { data, content } = matter(fileContent);
            const htmlContent = marked(content).toString();

            return {
                slug: filename.replace(".md", ""),
                title: data.title,
                date: data.date,
                tags: data.tags,
                excerpt: data.excerpt || "",
                content: htmlContent,
                links: data.links || []
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
} 