import type { MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/style";


export const meta: MetaFunction = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function ThemeDemo() {
    return (
        <div className="min-h-screen bg-theme-bg">
            {/* Hero Section */}
            <Hero />
        </div>
    )
} 