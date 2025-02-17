import { Outlet } from "@remix-run/react";

export default function Blog() {
    return (
        <div className="min-h-screen bg-theme-bg">
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    <Outlet />
                </div>
            </section>
        </div>
    );
}