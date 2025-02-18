import type { MetaFunction } from "@remix-run/node";

import { FixedWidthHero } from "~/components/style";

export const meta: MetaFunction = () => {
    return [
        { title: "My CV" },
    ];
};

export default function CV() {
    return (
        <div className="mx-auto px-4 max-w-4xl space-y-12 pb-8">
            <FixedWidthHero prefixText="Hi, I'm" emphasisText="Oliver Jay" subheading="I'm a Software Developer" />

            {/* Introduction */}
            <section className="bg-theme-bg-card rounded-lg p-8 shadow-sm">
                <p className="text-theme-text-light leading-relaxed">
                    I'm a highly skilled and accomplished Computer Science graduate with experience in data analysis and software development,
                    as well as proficiency in programming languages such as JavaScript, Go, and Python. Possess strong problem-solving and
                    team working abilities, with exceptional presentation skills. Passionate about machine learning and interested in a range
                    of technologies, including AI, cloud computing, and encryption.
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
                                <span>Took a sabbatical to travel and see the world while still young, gaining a broader perspective on global cultures</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-theme-primary mr-3">•</span>
                                <span>Focused on self-directed learning and development in software development and programming, with a particular emphasis on Golang, Crypto and full-stack development</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-theme-primary mr-3">•</span>
                                <span>Completed personal projects such as WebNovelClient, a full stack project explained in this blog post</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-theme-primary mr-3">•</span>
                                <span>Used the time to deepen my expertise in technologies such as, Golang, React and CI/CD aligning my skills with my long-term career goals in software development</span>
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
                                <span className="text-theme-text-light">JavaScript: Primary programming language used at The Curve Group</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-theme-primary mr-3">•</span>
                                <span className="text-theme-text-light">Python: Utilized for physics/maths scripts and machine learning algorithms</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-theme-primary mr-3">•</span>
                                <span className="text-theme-text-light">Java and C: Applied to various programming projects during university studies</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-theme-primary mr-3">•</span>
                                <span className="text-theme-text-light">Golang: Used in recent personal projects with SQLite database integration</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-theme-primary mr-3">•</span>
                                <span className="text-theme-text-light">React: Developed modern frontends with dynamic user interfaces</span>
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
                                <span className="text-theme-text-light">Teamwork: Experienced in collaborative project management</span>
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
    );
} 