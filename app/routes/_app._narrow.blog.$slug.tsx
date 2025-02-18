
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
        <>
            <header className="mb-8">
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
            <article className="bg-theme-bg-card rounded-card p-8 shadow-card">
                <div
                    className="prose prose-invert prose-headings:font-display prose-headings:text-theme-text prose-p:text-theme-text-secondary max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>
        </>
    );
} 