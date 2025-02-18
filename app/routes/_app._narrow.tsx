import { Outlet, useOutletContext } from "@remix-run/react";

export default function Project() {
    const context = useOutletContext();
    return (
        <div className="mx-auto px-4 max-w-6xl">
            <Outlet context={context} />
        </div>
    );
} 