import { useOutletContext } from "@remix-run/react";

import type { BlogPost } from "~/types/blog";
import { FixedWidthHero } from "~/components/style";
import { BlogCard } from "~/components/cards";

export default function BlogIndex() {
    const { posts } = useOutletContext<{ posts: BlogPost[] }>();
    return (
        <>
            <FixedWidthHero
                prefixText="My"
                emphasisText="Blog"
            />
            <div className="space-y-8">
                {posts.map(post => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </>
    );
} 