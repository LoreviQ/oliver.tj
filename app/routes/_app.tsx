import { Outlet } from "@remix-run/react";

import { Header } from "~/components/header";

export default function App() {
    return (
        <Layout />
    );
}

function Layout() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-theme-bg to-theme-bg-secondary text-white">
            <Header />
            <div className="mx-auto">
                <Outlet />
            </div>
        </div >
    );
}