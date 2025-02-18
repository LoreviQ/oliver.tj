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
}
export function Header({ posts, projects }: HeaderProps) {
    return (
        <header className="bg-theme-bg-secondary backdrop-blur-xs border-b border-theme-bg-border sticky top-0 z-50">
            <div className="grid grid-cols-15 items-center h-16 px-8 w-full max-w-7xl mx-auto">
                <ProfileSection />
                <SearchBar posts={posts} projects={projects} />
                <Navigation />
            </div>
        </header>
    );
}

function ProfileSection() {
    return (
        <>
            <Link
                to="/"
                className="flex items-center space-x-3 col-span-2 group"
            >
                <div className="w-10 h-10 rounded-lg bg-theme-primary/10 flex items-center justify-center overflow-hidden border bborder-theme-bg-border group-hover:border-theme-primary/40 transition-colors">
                    <img src="/images/avatar-icon.webp" alt="Oliver Jay" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <span className="text-theme-text font-display font-bold group-hover:text-theme-primary transition-colors">
                        Oliver Jay
                    </span>
                    <span className="text-theme-text-muted text-sm">
                        @oliver.tj
                    </span>
                </div>
            </Link>
            <Link
                to="/cv"
                className="col-span-1 text-theme-text-secondary hover:text-theme-accent transition-colors flex items-center justify-center font-bold"
            >
                CV
            </Link>
        </>
    );
}

interface SearchBarProps {
    posts: BlogPost[];
    projects: Project[];
}
function SearchBar({ posts, projects }: SearchBarProps) {
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
        <div className="col-span-9 px-4" ref={searchRef}>
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

function Navigation() {
    return (
        <nav className="flex items-center justify-end space-x-6 col-span-3">
            <Link
                to="/blog"
                className="text-theme-text-secondary hover:text-theme-primary transition-colors"
            >
                Blog
            </Link>
            <Link
                to="/projects"
                className="text-theme-text-secondary hover:text-theme-accent transition-colors"
            >
                Projects
            </Link>
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