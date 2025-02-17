import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [{ title: "Theme Demo" }];
};

export default function ThemeDemo() {
    return (
        <div className="min-h-screen bg-theme-bg">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-section">
                <div className="absolute inset-0 bg-gradient-to-br from-theme-primary-dark via-theme-bg to-theme-accent-dark opacity-10 animate-gradient"></div>
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="font-display text-6xl font-bold text-theme-text mb-6">
                            Welcome to the <span className="text-theme-primary">Design System</span>
                        </h1>
                        <p className="text-theme-text-secondary text-xl max-w-2xl mx-auto mb-8">
                            A showcase of our beautiful dark theme with professional accents and modern flourishes.
                        </p>
                        <div className="space-x-4">
                            <button className="bg-theme-primary hover:bg-theme-primary-hover text-theme-text px-6 py-3 rounded-lg transition-colors">
                                Primary Action
                            </button>
                            <button className="bg-theme-accent hover:bg-theme-accent-hover text-theme-text px-6 py-3 rounded-lg transition-colors">
                                Secondary Action
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-section bg-theme-bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl font-bold text-theme-text mb-12 text-center">
                        Feature Cards
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-theme-bg-card rounded-card p-6 shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="text-theme-primary text-2xl mb-4">✨</div>
                            <h3 className="font-display text-xl font-bold text-theme-text mb-2">
                                Beautiful Design
                            </h3>
                            <p className="text-theme-text-muted">
                                Carefully crafted with modern aesthetics and professional appeal.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-theme-bg-card rounded-card p-6 shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="text-theme-accent text-2xl mb-4">🎨</div>
                            <h3 className="font-display text-xl font-bold text-theme-text mb-2">
                                Rich Colors
                            </h3>
                            <p className="text-theme-text-muted">
                                A sophisticated palette that balances professionalism with personality.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-theme-bg-card rounded-card p-6 shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="text-theme-primary text-2xl mb-4">⚡</div>
                            <h3 className="font-display text-xl font-bold text-theme-text mb-2">
                                Dynamic Elements
                            </h3>
                            <p className="text-theme-text-muted">
                                Subtle animations and interactions that enhance the experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Status Messages */}
            <section className="py-section">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl font-bold text-theme-text mb-12 text-center">
                        Status Messages
                    </h2>
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <div className="bg-theme-success-light text-theme-success rounded-lg p-4">
                            Success: Your changes have been saved successfully!
                        </div>
                        <div className="bg-theme-error-light text-theme-error rounded-lg p-4">
                            Error: Something went wrong. Please try again.
                        </div>
                        <div className="bg-theme-warning-light text-theme-warning rounded-lg p-4">
                            Warning: Your session will expire in 5 minutes.
                        </div>
                    </div>
                </div>
            </section>

            {/* Code Example */}
            <section className="py-section bg-theme-bg-secondary">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl font-bold text-theme-text mb-12 text-center">
                        Code Example
                    </h2>
                    <div className="bg-theme-bg-card rounded-card p-6 max-w-2xl mx-auto">
                        <pre className="font-mono text-sm text-theme-text-secondary">
                            <code>{`function HelloWorld() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="text-theme-primary">
      Hello, World!
    </div>
  );
}`}</code>
                        </pre>
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section className="py-section">
                <div className="container mx-auto px-4">
                    <h2 className="font-display text-4xl font-bold text-theme-text mb-12 text-center">
                        Typography
                    </h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <h1 className="font-display text-5xl font-bold text-theme-text">
                            Display Heading
                        </h1>
                        <h2 className="font-display text-4xl font-bold text-theme-text">
                            Section Heading
                        </h2>
                        <h3 className="font-display text-3xl font-bold text-theme-text">
                            Subsection Heading
                        </h3>
                        <p className="text-theme-text-secondary">
                            Regular paragraph text in our secondary color, perfect for longer form content
                            and descriptions.
                        </p>
                        <p className="text-theme-text-muted text-sm">
                            Small muted text for less important information.
                        </p>
                        <p className="text-theme-text-accent">
                            Accent text that draws attention to important information.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
} 