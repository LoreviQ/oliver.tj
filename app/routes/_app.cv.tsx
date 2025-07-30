import type { MetaFunction } from "@remix-run/node";

import { Hero } from "~/components/style";

export const meta: MetaFunction = () => {
    return [
        { title: "My CV" },
    ];
};

export default function CV() {
    return (
        <>
            <Hero prefixText="Hi, I'm" emphasisText="Oliver Jay" subheading="I'm a Software Developer" />
            <div className="mx-auto px-4 max-w-4xl space-y-12 pb-8">

                {/* Introduction */}
                <section className="bg-theme-bg-card rounded-lg p-8 shadow-sm">
                    <p className="text-theme-text-light leading-relaxed">
                        I am a highly skilled full-stack developer and Computer Science graduate with expertise in modern web technologies,
                        AI, and cloud architecture. My deep passion for technology drives me to constantly learn and build new things,
                        often working on individual projects and acquiring new skills in my downtime. I've successfully delivered multiple
                        production applications, including an award-winning Web3 project and various open-source tools. Proficient in
                        TypeScript, Go, and Python, with a strong focus on creating intuitive user experiences and implementing robust,
                        secure technical solutions.
                    </p>
                </section>

                {/* Employment History */}
                <section>
                    <h2 className="font-display text-3xl font-bold text-theme-text mb-8 flex items-center">
                        <span className="mr-3">💼</span>Employment History
                    </h2>

                    <div className="space-y-12">
                        <div className="bg-theme-bg-card rounded-lg p-8 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-display text-2xl font-bold text-theme-text">Soft Pauer</h3>
                                <span className="text-theme-text-light text-sm px-3 py-1 bg-theme-bg rounded">2025 - Current Day</span>
                            </div>
                            <h4 className="font-display text-lg font-semibold text-theme-primary mb-4">Full Stack Software Engineer</h4>
                            <p className="text-theme-text-light mb-6 leading-relaxed">
                                Full-stack software engineer specializing in AI-powered enterprise applications and cloud infrastructure. As the lead engineer, I drove the design, development, and deployment of a complex multi-agent AI system, taking it from initial concept to a fully operational, production-ready product. My key responsibilities and expertise included:
                            </p>
                            <ul className="list-none text-theme-text-light space-y-3">
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span><strong>AI Agent System Development & Deployment</strong>: Spearheaded the end-to-end development of a scalable multi-agent AI system, integrating advanced language models, sophisticated function calling, and comprehensive performance optimization strategies to deliver a robust enterprise solution</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span><strong>Secure Cloud Infrastructure & DevOps</strong>: Designed and deployed the entire Azure cloud environment, implementing a secure SDLC by integrating static code analysis (Bandit) and automated security checks directly into CI/CD pipelines. Established private networks and strict access controls to minimize the attack surface and ensure secure operational practices</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span><strong>Application Security</strong>: Developed core project functionalities with a security-first mindset, meticulously handling user inputs and implementing robust defenses against common vulnerabilities like Remote Code Execution (RCE) and SQL Injection</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span><strong>Advanced AI Security</strong>: Conducted in-depth security architecture reviews and threat modeling for the AI agent system, proactively addressing unique AI-specific risks such as prompt injection, sensitive data leakage, and denial-of-service scenarios, adhering to <strong>OWASP Top 10 for LLMs</strong> principles</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span><strong>Security Monitoring & Compliance Readiness</strong>: Implemented comprehensive logging, version control, and alerting systems to enhance visibility, support continuous monitoring, and contribute to overall compliance readiness</span>
                                </li>
                            </ul>
                            <p className="text-theme-text-light mt-6 leading-relaxed">
                                Responsible for transforming business requirements into robust, scalable technical solutions while maintaining high code quality standards and security best practices.
                            </p>
                        </div>

                        <div className="bg-theme-bg-card rounded-lg p-8 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-display text-2xl font-bold text-theme-text">Unemployed</h3>
                                <span className="text-theme-text-light text-sm px-3 py-1 bg-theme-bg rounded">2023 - 2024</span>
                            </div>
                            <div className="text-theme-text-light space-y-4">
                                <p className="leading-relaxed">
                                    Took a gap year to travel and see the world, gaining a broader perspective on global cultures. During this time, I focused on self-directed learning and development in software engineering, with a particular emphasis on emerging technologies and best practices.
                                </p>
                                
                                <p className="leading-relaxed">
                                    This period allowed me to gain hands-on experience across several key technology areas:
                                </p>
                                
                                <ul className="list-none space-y-3 ml-4">
                                    <li className="flex items-start">
                                        <span className="text-theme-primary mr-3">•</span>
                                        <span><strong>AI Agents</strong>: Building and deploying complex agentic systems through personal projects</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-theme-primary mr-3">•</span>
                                        <span><strong>Blockchain</strong>: Understanding core blockchain principles and deploying simple decentralized applications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-theme-primary mr-3">•</span>
                                        <span><strong>Cloud Platforms</strong>: Deepened expertise in Google Cloud Platform (GCP), including implementing CI/CD best practices within the GCP ecosystem</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-theme-primary mr-3">•</span>
                                        <span><strong>Databases</strong>: Explored various database solutions, from self-hosting to cloud options, encompassing both SQL and NoSQL paradigms</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-theme-primary mr-3">•</span>
                                        <span><strong>Authentication</strong>: Mastered diverse authentication methods, from basic JWT implementations to advanced OAuth 2.0 flows</span>
                                    </li>
                                </ul>
                                
                                <p className="leading-relaxed">
                                    I enhanced my proficiency in React, TypeScript, Rust, Python, and Go through extensive personal coding projects. This period was also highly productive in terms of practical application - I participated in several hackathons, winning multiple prizes for my projects, and completed personal projects such as SketchSlides, a modern responsive slideshow PWA, and WebNovelClient, a full-stack project for sharing user-uploaded novels.
                                </p>
                                
                                <p className="leading-relaxed">
                                    Overall, I used this time strategically to align my skills with my long-term career goals in software development and security, ensuring I was well-prepared for the next phase of my professional journey.
                                </p>
                            </div>
                        </div>

                        <div className="bg-theme-bg-card rounded-lg p-8 shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="font-display text-2xl font-bold text-theme-text">The Curve Group</h3>
                                <span className="text-theme-text-light text-sm px-3 py-1 bg-theme-bg rounded">2021 - 2022</span>
                            </div>
                            <ul className="list-none text-theme-text-light space-y-3">
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Officially employed as a Data Analyst, though I had a variety of responsibilities in this position</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Set up and managed the primary database used by the company (Microsoft Dataverse), managing dataflows and API calls</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Frequent usage of SQL, PowerQuery, Excel, and Power BI to create and distribute reports</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Extensive customization of the front end of the database using JavaScript, PowerApps, Power Automate, and Azure Functions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Experienced working in a small self-managed team (2-3 people)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Troubleshooted technical issues throughout the business, providing support and guidance to staff</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="font-display text-3xl font-bold text-theme-text mb-8 flex items-center">
                        <span className="mr-3">🎓</span>Education and Qualifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-theme-bg-card rounded-lg p-6 shadow-sm">
                            <h3 className="font-display text-xl font-bold text-theme-text mb-2">Royal Holloway University of London</h3>
                            <p className="text-theme-text-light text-sm mb-2">2019 - 2021</p>
                            <p className="text-theme-primary font-medium">Bachelors of Computer Science (First Class)</p>
                        </div>

                        <div className="bg-theme-bg-card rounded-lg p-6 shadow-sm">
                            <h3 className="font-display text-xl font-bold text-theme-text mb-2">University of Birmingham</h3>
                            <p className="text-theme-text-light text-sm mb-2">2016 - 2019</p>
                            <p className="text-theme-text-light">Diploma of Higher Education in Physics</p>
                        </div>

                        <div className="bg-theme-bg-card rounded-lg p-6 shadow-sm">
                            <h3 className="font-display text-xl font-bold text-theme-text mb-2">Space Studio Banbury</h3>
                            <p className="text-theme-text-light text-sm mb-2">2014 - 2016</p>
                            <p className="text-theme-text-light">A Levels: Maths (A*), Further Maths (A), Physics (A)</p>
                        </div>

                        <div className="bg-theme-bg-card rounded-lg p-6 shadow-sm">
                            <h3 className="font-display text-xl font-bold text-theme-text mb-2">Chenderit School</h3>
                            <p className="text-theme-text-light text-sm mb-2">2009 - 2014</p>
                            <ul className="text-theme-text-light space-y-1">
                                <li>GCSEs: 7 A and A* including Maths, Further Maths and English. 13 total passing grades</li>
                                <li>Additional Maths (A) - FSMQ</li>
                                <li>Extended Project (A) - Level 3 Qualification</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="font-display text-3xl font-bold text-theme-text mb-8 flex items-center">
                        <span className="mr-3">💻</span>Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-theme-bg-card rounded-lg p-6 shadow-sm">
                            <h3 className="font-display text-xl font-bold text-theme-text mb-4">Programming Proficiency</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">TypeScript: Used extensively in personal projects</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">JavaScript: Primary programming language used at The Curve Group</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Python: Primary language for building and deploying AI agent systems and machine learning algorithms</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Rust: Used for smart contract development on the Solana blockchain</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Golang: Used in recent personal projects with SQLite database integration</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">React: Developed modern frontends with dynamic user interfaces, particularly with Remix</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-theme-bg-card rounded-lg p-6 shadow-sm">
                            <h3 className="font-display text-xl font-bold text-theme-text mb-4">Additional Skills</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Cloud Platforms: Extensive experience with Azure; hands-on experience with Google Cloud Platform (GCP)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">DevOps: CI/CD implementation, cloud deployment, and best practices (Azure, GCP)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Cyber-Security: Knowledge of application security (RCE, SQL Injection), AI security (OWASP Top 10 for LLMs), network security, OS security, cryptography, and OSINT</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">AI Agents: Experience in building and deploying complex agentic systems</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Databases: Proficient in designing and managing both SQL and NoSQL databases, from self-hosted to cloud solutions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Authentication: Expertise in various methods, including JWT and OAuth 2.0</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Blockchain: Understanding of core principles and experience deploying simple decentralized applications</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Operating Systems: Strong experience with all operating systems, particularly Linux (daily driver)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Problem Solving: Demonstrated through complex engineering challenges and technical problem-solving</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Presentation Skills: Regular presentations to executives and department heads</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Self-Management: Strong ability to organize and conduct independent research and project development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Teamwork: Led a small team (3 people) in the development and deployment of the AI agent system, taking primary ownership of project direction and execution</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Interests and Achievements */}
                <section>
                    <h2 className="font-display text-3xl font-bold text-theme-text mb-6 flex items-center">
                        <span className="mr-3">🏆</span>Interests and Achievements
                    </h2>
                    <div className="bg-theme-bg-card rounded-lg p-8 shadow-sm">
                        <div className="text-theme-text-light space-y-6">
                            <p className="leading-relaxed">
                                Particularly interested in machine learning, I performed my final year project on analysis of machine learning
                                algorithms and achieved the highest grade. Interests in a wide range of technologies, from AI, cloud computing,
                                different operating systems, networking, and encryption.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Won first place on the Solana Zeus Bounty at Taipei Blockchain Week 2024 Hackathon (8888 $ZEUS)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Won second place at the Web3 AI London Hackathon (500 $USDC)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Achieved Chief Scout's Gold Award</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Achieved UK Maths Challenge Gold Award - Best in School</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
} 