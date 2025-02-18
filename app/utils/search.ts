import type { BlogPost } from "~/types/blog";
import type { Project } from "~/types/project";

export type SearchResult = {
    type: "blog" | "project";
    title: string;
    url: string;
    matchText?: string;
    score: number;
};

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
}

function highlightMatch(text: string, query: string): string {
    const strippedText = stripHtml(text);
    const index = strippedText.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return strippedText;

    const start = Math.max(0, index - 40);
    const end = Math.min(strippedText.length, index + query.length + 40);
    let excerpt = strippedText.slice(start, end);

    if (start > 0) excerpt = "..." + excerpt;
    if (end < strippedText.length) excerpt = excerpt + "...";

    const queryRegex = new RegExp(query, 'gi');
    return excerpt.replace(queryRegex, match => `<b>${match}</b>`);
}

function searchBlogPosts(posts: BlogPost[], query: string): SearchResult[] {
    const results: SearchResult[] = [];
    const q = query.toLowerCase();

    for (const post of posts) {
        let score = 0;
        let matchText = '';

        // Title match (highest priority)
        if (post.title.toLowerCase().includes(q)) {
            score += 100;
            matchText = highlightMatch(post.title, query);
        }

        // Tags match
        if (post.tags?.some(tag => tag.toLowerCase().includes(q))) {
            score += 50;
            if (!matchText) {
                matchText = highlightMatch(post.tags.join(', '), query);
            }
        }

        // Excerpt match
        if (post.excerpt?.toLowerCase().includes(q)) {
            score += 25;
            if (!matchText) {
                matchText = highlightMatch(post.excerpt, query);
            }
        }

        // Content match
        if (post.content.toLowerCase().includes(q)) {
            score += 10;
            if (!matchText) {
                matchText = highlightMatch(post.content, query);
            }
        }

        if (score > 0) {
            results.push({
                type: 'blog',
                title: post.title,
                url: `/blog/${post.slug}`,
                matchText,
                score,
            });
        }
    }

    return results;
}

function searchProjects(projects: Project[], query: string): SearchResult[] {
    const results: SearchResult[] = [];
    const q = query.toLowerCase();

    for (const project of projects) {
        let score = 0;

        // Name match
        if (project.name.toLowerCase().includes(q)) {
            score += 100;
        }

        // URL match
        if (project.url.toLowerCase().includes(q)) {
            score += 25;
        }

        // Description match (if available)
        if (project.description?.toLowerCase().includes(q)) {
            score += 15;
        }

        if (score > 0) {
            results.push({
                type: 'project',
                title: project.name,
                url: project.url,
                matchText: project.url,
                score,
            });
        }
    }

    return results;
}

export function search(query: string, blogPosts: BlogPost[], projects: Project[]): SearchResult[] {
    if (!query.trim()) return [];

    return [
        ...searchBlogPosts(blogPosts, query),
        ...searchProjects(projects, query)
    ];
} 