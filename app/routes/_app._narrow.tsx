import { Outlet } from "@remix-run/react";

export default function Project() {
    return (
        <div className="container mx-auto px-4 max-w-6xl">
            <Outlet />
        </div>
    );
} 