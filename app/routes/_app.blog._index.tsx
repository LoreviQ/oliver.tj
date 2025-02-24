import { useOutletContext } from "@remix-run/react";

import type { BlogPost } from "~/types/blog";
import { Hero } from "~/components/style";
import { BlogCard } from "~/components/cards";

export default function BlogIndex() {
    const { posts } = useOutletContext<{ posts: BlogPost[] }>();
    return (
        <>
            <Hero
                prefixText="My"
                emphasisText="Blog"
            />
            <div className="space-y-8 mx-auto px-4 max-w-6xl">
                {posts.map(post => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </>
    );
} 