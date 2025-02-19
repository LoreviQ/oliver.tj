import { Link } from "@remix-run/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useRef, useEffect } from "react";
import type { BlogPost } from "~/types/blog";
import type { Project } from "~/types/project";
import { search } from "~/utils/search";
import { SearchResults } from "./search-results";

interface HeaderProps {
    posts: BlogPost[];
    projects: Project[];
    config: Record<string, string>;
}
export function Header({ posts, projects, config }: HeaderProps) {
    const [cols, setCols] = useState(15);
    useEffect(() => {
        const updateCols = () => {
            const containerWidth = document.body.clientWidth; // Or use a specific container's width
            const colWidth = 85; // Desired column width in pixels
            const calculatedCols = Math.floor(containerWidth / colWidth);
            setCols(calculatedCols > 15 ? 15 : calculatedCols);
        };

        updateCols();
        window.addEventListener("resize", updateCols); // Recalculate on resize

        return () => window.removeEventListener("resize", updateCols);
    }, []);

    return (
        <header className="bg-theme-bg-secondary backdrop-blur-xs border-b border-theme-bg-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto">
                <div className={`grid items-center h-16 w-full`}
                    style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                    <ProfileSection config={config} cols={cols - 1} />
                    <SearchBar posts={posts} projects={projects} cols={cols - 6} />
                    <Navigation cols={cols - 3} />
                </div>
            </div>
        </header>
    );
}

interface ProfileSectionProps {
    config: Record<string, string>;
    cols: number;
}
function ProfileSection({ config, cols }: ProfileSectionProps) {
    const thisCols = Math.min(cols, 3);
    return (
        <div className="px-4" style={{ gridColumn: `span ${thisCols}` }}>
            <div className="grid" style={{ gridTemplateColumns: `repeat(${thisCols}, 1fr)` }}>
                <Link
                    to="/"
                    className="flex items-center space-x-3 group"
                    style={{ gridColumn: "span 2" }}
                >
                    <div className="w-10 h-10 rounded-lg bg-theme-primary/10 flex items-center justify-center overflow-hidden border bborder-theme-bg-border group-hover:border-theme-primary/40 transition-colors">
                        <img src="/images/avatar-icon.webp" alt="Oliver Jay" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-theme-text font-display font-bold group-hover:text-theme-primary transition-colors">
                            {config.NAME}
                        </span>
                        <span className="text-theme-text-muted text-sm">
                            @{config.DOMAIN}
                        </span>
                    </div>
                </Link>
                {thisCols >= 3 && (
                    <Link
                        to="/cv"
                        className="text-theme-text-secondary hover:text-theme-accent transition-colors flex items-center justify-center font-bold"
                        style={{ gridColumn: "span 1" }}
                    >
                        CV
                    </Link>
                )}
            </div>
        </div>
    );
}

interface SearchBarProps {
    posts: BlogPost[];
    projects: Project[];
    cols: number;
}
function SearchBar({ posts, projects, cols }: SearchBarProps) {
    if (cols < 1) return null;
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const results = search(query, posts, projects);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        setIsOpen(true);
    };

    return (
        <div className="px-4" style={{ gridColumn: `span ${cols}` }} ref={searchRef}>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={handleSearch}
                    className="w-full bg-theme-bg/50 border border-theme-bg-border focus:border-theme-primary rounded-lg px-4 py-2 pl-10
                             text-theme-text placeholder:text-theme-text-muted
                             focus:outline-hidden focus:ring-2 focus:ring-theme-primary/20
                             transition-all duration-200"
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-theme-text-muted absolute left-3 top-1/2 transform -translate-y-1/2" />

                {isOpen && (
                    <SearchResults
                        query={query}
                        results={results}
                        onClose={() => setIsOpen(false)}
                    />
                )}
            </div>
        </div>
    );
}

interface NavigationProps {
    cols: number;
}
function Navigation({ cols }: NavigationProps) {
    return (
        <nav className="flex items-center justify-end space-x-6 px-4" style={{ gridColumn: `span ${Math.min(3, cols)}` }}>
            {cols >= 3 && (
                <Link
                    to="/blog"
                    className="text-theme-text-secondary hover:text-theme-primary transition-colors"
                >
                    Blog
                </Link>)}
            {cols >= 2 && (<Link
                to="/projects"
                className="text-theme-text-secondary hover:text-theme-accent transition-colors"
            >
                Projects
            </Link>
            )}
            <Link
                to="/contact"
                className="px-4 py-2 bg-theme-primary text-theme-text rounded-lg 
                         hover:bg-theme-primary-hover transition-colors"
            >
                Contact
            </Link>
        </nav>
    );
}