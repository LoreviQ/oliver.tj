import { Outlet } from "@remix-run/react";

export default function Project() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <Outlet />
            </div>
        </section>
    );
} 