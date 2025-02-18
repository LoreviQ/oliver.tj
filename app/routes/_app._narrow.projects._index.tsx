import { useOutletContext } from "@remix-run/react";

import type { Project } from "~/types/project";
import { FixedWidthHero } from "~/components/style";
import { ProjectCard } from "~/components/cards";

export default function ProjectIndex() {
    const { projects } = useOutletContext<{ projects: Project[] }>();

    return (
        <>
            <FixedWidthHero
                prefixText="My"
                emphasisText="Projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                    />
                ))}
            </div>
        </>
    );
} 