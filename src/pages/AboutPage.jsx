import { RevealOnScroll } from "../components/RevealOnScroll"

export const AboutPage = () => {


    const frontendSkills = [
        "React",
        "JavaScript",
        "HTML",
        "CSS"

    ]

    const backendSkills = [
        "Java",
        "SpringBoot",
        "Node.JS",
        "Python",
        "PostgreSQL"
    ]

    const toolsSkills = [
        "Vite",
        "VSCode",
        "Eclipse",
        "BootStrap"
    ]

    const certSkills = [
        "Introduction to Front-End Development - Coursera 2024",
        "Introduction to Software Engineering – Coursera 2024",

    ]


    return <section id="about" className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
                    <p className="mb-6">
                        Extremely passionate developer
                        who is willing to learn and impact the world with tech. Here listed below are my skills I bring!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">

                                        {tech}
                                    </span>

                                ))}
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">

                                        {tech}
                                    </span>

                                ))}
                            </div>

                        </div>


                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frameworks/Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {toolsSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">

                                        {tech}
                                    </span>

                                ))}
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Certifications</h3>
                            <div className="flex flex-wrap gap-2">
                                {certSkills.map((tech, key) => (
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">

                                        {tech}
                                    </span>

                                ))}
                            </div>

                        </div>

                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">

                        <h3 className="text-xl font-bold mb-4">  Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong> B.S. in Computer Science </strong> - St. John's University Queens, NY (2023-Present)
                            </li>
                            <li>
                                <strong>Relevant Coursework: </strong>Computer Programming Fundamentals I & II, Data Structures and Algorithms, Software Design Methods, Networking, Theory of Programming Language, Data Security & Cryptography, Advanced Data Structures
                            </li>

                        </ul>

                    </div>
                   
                </div>
            </div>
        </RevealOnScroll>
    </section>
}