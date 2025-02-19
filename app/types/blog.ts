export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    excerpt?: string;
    content: string;
    links?: { name: string; url: string }[];
} 