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
                        I'm a highly skilled full-stack developer and Computer Science graduate with expertise in modern web technologies,
                        blockchain development, and system architecture. I've successfully delivered multiple production applications,
                        including an award-winning Web3 project and various open-source tools. Proficient in TypeScript, Go and Python,
                        with experience in both frontend and backend development. Passionate about creating intuitive user experiences and
                        implementing complex technical solutions.
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
                                <h3 className="font-display text-2xl font-bold text-theme-text">Unemployed</h3>
                                <span className="text-theme-text-light text-sm px-3 py-1 bg-theme-bg rounded">2023 - Current Day</span>
                            </div>
                            <p className="text-theme-text-light mb-6 leading-relaxed">
                                After gaining valuable experience at The Curve Group, I took a deliberate gap year to focus on personal and
                                professional development. During this time, I traveled to broaden my horizons and worked on advancing my skills
                                in software development, particularly in areas that align with my passion for programming and cutting-edge technologies.
                            </p>
                            <ul className="list-none text-theme-text-light space-y-3">
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Took a gap year to travel and see the world, gaining a broader perspective on global cultures</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Focused on self-directed learning and development in software development and programming, with a particular emphasis on emerging technolgogies such as AI and Crypto</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Participated in several hackathons, in which I won multiple prizes for my projects</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Completed personal projects such as SketchSlides, a modern responsive slideshow PWA, and WebNovelClient, a full stack project for sharing user uploaded novels</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Used the time to deepen my expertise in technologies such as Golang, React and CI/CD aligning my skills with my long-term career goals in software development</span>
                                </li>
                            </ul>
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
                                    <span>Frequent usage of SQL, PowerQuery, Excel and Power BI to create and distribute reports</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Extensive customization of the front end of the database using JavaScript, PowerApps, Power Automate and Azure Functions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span>Experienced working in a small self managed team (2-3 people)</span>
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
                                    <span className="text-theme-text-light">Python: Utilized for physics/maths scripts and machine learning algorithms</span>
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
                                    <span className="text-theme-text-light">DevOps: CI/CD implementation and cloud deployment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Operating Systems: Experienced with Windows and various Linux distributions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Cyber-Security: Knowledge in networking, OS security, cryptography, and OSINT</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Problem Solving: Demonstrated through programming challenges and physics problems</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Presentation Skills: Regular presentations to executives and department heads</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Self-Management: Strong ability to organize and conduct independent research</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-theme-primary mr-3">•</span>
                                    <span className="text-theme-text-light">Teamwork: Collaborated effectively in small teams during hackathons and project development</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Interests and Achievements */}
                <section className="bg-theme-bg-card rounded-lg p-8 shadow-sm">
                    <h2 className="font-display text-3xl font-bold text-theme-text mb-6 flex items-center">
                        <span className="mr-3">🏆</span>Interests and Achievements
                    </h2>
                    <div className="text-theme-text-light space-y-6">
                        <p className="leading-relaxed">
                            Particularly interested in machine learning, I performed my final year project on analysis of machine learning
                            algorithms and achieved the highest grade. Interests in a wide range of technologies, from AI, cloud computing,
                            different operating systems, networking and encryption.
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
                </section>
            </div>
        </>
    );
} 