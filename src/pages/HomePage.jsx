import React from 'react'
import myPhoto from '../assets/propic.jpg'
import { RevealOnScroll } from '../components/RevealOnScroll';

export const HomePage = () => {

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-8"
        >
            <RevealOnScroll>
                <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between max-w-6xl w-full">

                    {/* LEFT - Text */}

                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
                            Hi, I am Niyo White
                        </h1>

                        <p className="text-white text-lg mb-8 max-w-lg">
                            An Aspiring <span className='text-blue-500'>Software Developer! </span>
                        </p>

                        <div className="flex justify-center md:justify-start space-x-4">
                            <a
                                href="#projects"
                                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* RIGHT - Image */}
                    <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                        <img
                            src={myPhoto}
                            alt="Niyo White"
                            className="w-80 h-90 rounded-full shadow-lg object-contain"
                        />
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};

