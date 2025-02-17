import { BlogPost } from "~/types/blog";
import { Link } from "@remix-run/react";

interface BlogSnippetProps {
    post: BlogPost;
}

export function BlogSnippet({ post }: BlogSnippetProps) {
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