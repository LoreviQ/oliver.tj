import { Link } from "@remix-run/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function Header() {
    return (
        <header className="bg-theme-bg-secondary backdrop-blur-xs border-b border-theme-bg-border sticky top-0 z-50">
            <div className="grid grid-cols-10 items-center h-16 px-8 w-full max-w-7xl mx-auto">
                {/* Profile Section - 2 cols */}
                <Link
                    to="/"
                    className="flex items-center space-x-3 col-span-2 group"
                >
                    <div className="w-10 h-10 rounded-lg bg-theme-primary/10 flex items-center justify-center overflow-hidden border bborder-theme-bg-border group-hover:border-theme-primary/40 transition-colors">
                        <img src="/images/avatar-icon.png" alt="Oliver Jay" className="w-full h-full object-cover" />
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

                {/* Search Bar - 6 cols */}
                <div className="col-span-6 px-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-theme-bg/50 border border-theme-bg-border focus:border-theme-primary rounded-lg px-4 py-2 pl-10
                                     text-theme-text placeholder:text-theme-text-muted
                                     focus:outline-hidden focus:ring-2 focus:ring-theme-primary/20
                                     transition-all duration-200"
                        />
                        <MagnifyingGlassIcon className="w-5 h-5 text-theme-text-muted absolute left-3 top-1/2 transform -translate-y-1/2" />
                    </div>
                </div>

                {/* Navigation - 2 cols */}
                <nav className="flex items-center justify-end space-x-6 col-span-2">
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
                                 hover:bg-theme-primary-hover transition-colors
                                 shadow-lg shadow-theme-primary/20 hover:shadow-theme-primary/30"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}