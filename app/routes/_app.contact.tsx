import type { MetaFunction } from "@remix-run/node";

import { FixedWidthHero } from "~/components/style";

export const meta: MetaFunction = () => {
    return [{ title: "Contact Me" }];
};

export default function Contact() {
    return (
        <>
            <FixedWidthHero
                prefixText="Let's"
                emphasisText="Connect"
                subheading="I'm always interested in hearing about new opportunities and collaborations."
            />
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-theme-bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="space-y-6">
                            <a
                                href="mailto:oliver.tj@olvier.tj"
                                className="block group"
                            >
                                <div className="flex items-center p-4 rounded-lg bg-theme-bg hover:bg-theme-bg-secondary transition-all duration-300">
                                    <span className="text-3xl mr-4">📧</span>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-theme-text group-hover:text-theme-primary transition-colors">
                                            Email
                                        </h3>
                                        <p className="text-theme-text-secondary">
                                            oliver.tj@olvier.tj
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://github.com/LoreviQ"
                                className="block group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center p-4 rounded-lg bg-theme-bg hover:bg-theme-bg-secondary transition-all duration-300">
                                    <span className="text-3xl mr-4">💻</span>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-theme-text group-hover:text-theme-primary transition-colors">
                                            GitHub
                                        </h3>
                                        <p className="text-theme-text-secondary">
                                            Follow my open source contributions
                                        </p>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/oliver-tj-/"
                                className="block group"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center p-4 rounded-lg bg-theme-bg hover:bg-theme-bg-secondary transition-all duration-300">
                                    <span className="text-3xl mr-4">💼</span>
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-theme-text group-hover:text-theme-primary transition-colors">
                                            LinkedIn
                                        </h3>
                                        <p className="text-theme-text-secondary">
                                            Connect with me professionally
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 