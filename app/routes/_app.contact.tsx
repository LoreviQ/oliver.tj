import type { MetaFunction } from "@remix-run/node";
import { useOutletContext } from "@remix-run/react";

import { Hero } from "~/components/style";

export const meta: MetaFunction = () => {
    return [{ title: "Contact Me" }];
};

export default function Contact() {
    const { config } = useOutletContext<{ config: Record<string, string> }>();
    return (
        <>
            <Hero
                prefixText="Let's"
                emphasisText="Connect"
                subheading="I'm always interested in hearing about new opportunities and collaborations."
            />
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-theme-bg-card rounded-xl p-8 space-y-6">
                    <ContactCard
                        icon="📧"
                        title="Email"
                        href={`mailto:${config.EMAIL}`}
                        description={config.EMAIL}
                    />

                    <ContactCard
                        icon="💻"
                        title="GitHub"
                        href={`https://github.com/${config.GITHUB}`}
                        description="Follow my open source contributions"
                    />

                    <ContactCard
                        icon="💼"
                        title="LinkedIn"
                        href={`https://www.linkedin.com/in/${config.LINKEDIN}`}
                        description="Connect with me professionally"
                    />
                </div>
            </div>
        </>
    );
}

interface ContactCardProps {
    icon: string;
    title: string;
    href: string;
    description: string;
}

function ContactCard({ icon, title, href, description }: ContactCardProps) {
    return (
        <a
            href={href}
            className="block group"
        >
            <div className="flex items-center p-4 rounded-lg bg-theme-bg shadow-card hover:shadow-card-hover transition-all duration-300">
                <span className="text-3xl mr-4">{icon}</span>
                <div>
                    <h3 className="font-display text-xl font-semibold text-theme-text group-hover:text-theme-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-theme-text-secondary">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
} 