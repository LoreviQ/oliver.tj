import { Link } from "@remix-run/react";
import { useMemo } from "react";

export type SearchResult = {
    type: "blog" | "project";
    title: string;
    url: string;
    matchText?: string;
    score: number;
};

type SearchResultsProps = {
    query: string;
    results: SearchResult[];
    onClose: () => void;
};

export function SearchResults({ query, results, onClose }: SearchResultsProps) {
    const sortedResults = useMemo(() =>
        [...results].sort((a, b) => b.score - a.score),
        [results]
    );

    if (query.length === 0) return null;

    return (
        <div className="absolute top-full left-0 right-0 mt-2 bg-theme-bg-secondary border border-theme-bg-border rounded-lg shadow-lg max-h-96 overflow-y-auto">
            {results.length === 0 ? (
                <div className="p-4 text-theme-text-muted">
                    No results found for "{query}"
                </div>
            ) : (
                <ul>
                    {sortedResults.map((result, index) => (
                        <li key={index}>
                            <Link
                                to={result.url}
                                className="block p-4 hover:bg-theme-bg/50 border-b border-theme-bg-border last:border-0"
                                onClick={onClose}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-theme-text">
                                        {result.title}
                                    </span>
                                    <span className="text-xs px-2 py-1 bg-theme-primary/10 text-theme-primary rounded">
                                        {result.type.toUpperCase()}
                                    </span>
                                </div>
                                {result.matchText && (
                                    <p
                                        className="text-sm text-theme-text-muted mt-1"
                                        dangerouslySetInnerHTML={{ __html: result.matchText }}
                                    />
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
} 