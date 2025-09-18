import { RevealOnScroll } from "../components/RevealOnScroll"

export const ProjectsPage = () => {
    return <section id="projects"
        className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>


            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Eunioa</h3>
                        <p className="text-gray-400">Developed a full-stack mental health application with a clean, intuitive user interface using React.js and also built a scalable and maintainable backend with Java and Spring Boot capable of handling various types of user requests.

                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Java", "JavaScript", "Springboot", "PostgreSQL",].map((tech, key) => (


                                <span key={key} className="bg-blue-500/10 text-blue-500 py-2 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">

                                    {tech}
                                </span>
                            ))}



                        </div>
                        <div className="flex justify-between items-center">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://github.com/niyoxx">
                                View Project
                            </a>
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-2">Fixnex</h3>
                        <p className="text-gray-400">Developed a personal finance tracker that can help you manage and save your money.
                            Implemented reusable components and styling using Tailwind CSS

                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "JavaScript",].map((tech, key) => (


                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition">

                                    {tech}
                                </span>
                            ))}



                        </div>
                        <div className="flex justify-between items-center">
                            <a className="text-blue-400 hover:text-blue-300 transition-colors my-4" href="https://github.com/niyoxx">
                                View Project
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </RevealOnScroll>
    </section>
}