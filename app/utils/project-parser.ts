import path from "path";
import fs from "fs";
import type { Project } from "~/types/project";
import type { BlogPost } from "~/types/blog";

export function loadProjects(posts: BlogPost[]): Project[] {
    const projectsPath = path.join(process.cwd(), "app", "content", "project");
    return fs.readdirSync(projectsPath)
        .filter(filename => filename.endsWith(".json"))
        .map(filename => {
            const filePath = path.join(projectsPath, filename);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            const projectData = JSON.parse(fileContent);

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
} 