import { type LoaderFunction } from "@remix-run/node";
import { Link, useOutletContext, useLoaderData } from "@remix-run/react";


import { ChevronLeftIcon } from "~/components/icons";
import type { BlogPost } from "~/types/blog";

export const loader: LoaderFunction = async ({ params }) => {
    const { slug } = params;
    return Response.json({ slug });
}


export default function BlogPost() {
    const { posts } = useOutletContext<{ posts: BlogPost[] }>();
    const { slug } = useLoaderData<{ slug: string }>();
    const post = posts.find(post => post.slug === slug);
    if (!post) {
        throw new Response("Not Found", { status: 404 });
    }

    return (
        <div className="mx-auto px-4 max-w-6xl">
            <header className="mt-8 mb-4">
                <div className="flex gap-4">
                    <div className="flex items-center">
                        <Link
                            to="/blog"
                            className="text-theme-text-muted hover:text-theme-primary transition-colors"
                            aria-label="Back to blog"
                        >
                            <ChevronLeftIcon />
                        </Link>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-display text-4xl font-bold text-theme-text mb-4">{post.title}</h1>
                        <div className="text-sm text-theme-text-muted">
                            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {post.tags.join(", ")}
                        </div>
                    </div>
                </div>
            </header>

            {post.links && post.links.length > 0 && (
                <div className="my-4 mx-8 flex flex-wrap gap-2">
                    {post.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-theme-bg-card text-theme-text-muted hover:bg-theme-primary hover:text-white transition-colors rounded-full px-4 py-2 shadow-sm"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            <article className="bg-theme-bg-card rounded-card p-8 shadow-card">
                <div
                    className="prose prose-invert prose-headings:font-display prose-headings:text-theme-text prose-p:text-theme-text-secondary max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </div>
    );
} 