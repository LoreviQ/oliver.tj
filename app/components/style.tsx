import { ReactNode } from "react";


interface HeroProps {
    prefixText?: string;
    emphasisText?: string;
    suffixText?: string;
    subheading?: ReactNode;
}
export function Hero({ prefixText, emphasisText, suffixText, subheading }: HeroProps) {
    return (
        <section className="relative overflow-hidden py-section">
            <div className="absolute inset-0 bg-linear-to-b from-theme-primary-dark via-theme-accent-dark to-theme-bg opacity-10"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <h1 className="font-display text-6xl font-bold text-theme-text mb-6">
                        {prefixText} <span className="text-theme-primary">{emphasisText}</span> {suffixText}
                    </h1>
                    <p className="text-theme-text-secondary text-xl max-w-2xl mx-auto mb-8">
                        {subheading}
                    </p>
                </div>
            </div>
        </section>
    )
}
export function FixedWidthHero({ prefixText, emphasisText, suffixText, subheading }: HeroProps) {
    return (
        <section className="relative overflow-hidden py-section my-4">
            <div className="absolute inset-0 bg-radial from-theme-accent-dark from-20% to-theme-bg to-70% opacity-10 animate-gradient"></div>
            <div className="container mx-auto px-4 space-y-4">
                <h1 className="font-display text-6xl font-bold text-theme-text text-center">
                    {prefixText} <span className="text-theme-primary">{emphasisText}</span> {suffixText}
                </h1>
                {subheading && <p className="text-theme-text-secondary text-xl max-w-2xl mx-auto text-center">{subheading}</p>}
            </div>
        </section>
    )
}