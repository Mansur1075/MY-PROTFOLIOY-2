import React from 'react'
import Container from './Container'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Bennar = () => {
    return (
        <section className='bg-[#00ff8c25]'>
            <Container>
                <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-indigo-600 font-medium mb-3">Hello, I’m</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Al-Mansur <br />
                            <span className="text-indigo-600">Web Developer</span>
                        </h1>
                        <p className="text-gray-600 mt-6 max-w-lg">
                            I build modern, responsive and user-friendly web applications using
                            React, Tailwind CSS and modern JavaScript technologies.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
                                View Projects
                            </button>
                            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition">
                                Download CV
                            </button>
                        </div>
                        <div className="flex gap-4 mt-8">

                            {/* GitHub */}
                            <div className="relative group flex flex-col items-center cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border group-hover:bg-indigo-600 group-hover:text-white transition">
                                    <FaGithub />
                                </div>
                                <p className="mt-2 text-sm text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium select-none bg-gray-200 px-2 py-1 rounded-md shadow-sm">
                                    GitHub
                                </p>
                            </div>

                            {/* LinkedIn */}
                            <div className="relative group flex flex-col items-center cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border group-hover:bg-indigo-600 group-hover:text-white transition">
                                    <FaLinkedinIn />
                                </div>
                                <p className="mt-2 text-sm text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium select-nonebg-blue-100 px-2 py-1 rounded-md shadow-sm">
                                    LinkedIn
                                </p>
                            </div>

                            {/* Facebook */}
                            <div className="relative group flex flex-col items-center cursor-pointer">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full border group-hover:bg-indigo-600 group-hover:text-white transition">
                                    <FaFacebook />
                                </div>
                                <p className="mt-2 text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium select-nonebg-blue-100 px-2 py-1 rounded-md shadow-sm">
                                    Facebook
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="relative hidden md:flex justify-center">
                        <div className="w-80 h-80 bg-indigo-600/10 rounded-full"></div>
                        <div className="absolute w-64 h-64 bg-indigo-600/20 rounded-full"></div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Bennar