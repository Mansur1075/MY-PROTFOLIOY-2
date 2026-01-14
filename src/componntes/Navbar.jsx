import React from 'react'
import Container from './Container'
import { MdOutlineDeveloperMode } from 'react-icons/md'
import { FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { VscVscodeInsiders } from 'react-icons/vsc'

export const Navbar = () => {
    return (
        <nav className='sticky  z-50 top-0 left-0 bg-linear-to-r bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur shadow-sm'>
            <Container>
                {/* ================= Navbar ================= */}
                <div className="w-full">
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">
                            <div className="group flex items-center gap-4 cursor-pointer select-none">
                                <div className="p-3 rounded-xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white 
                              group-hover:bg-white group-hover:text-black 
                                transition-all duration-300 shadow-md">
                                    <FaCode className="text-[32px] group-hover:rotate-12 transition-transform duration-300" />
                                </div>
                                <div className="leading-tight">
                                    <h3 className="text-[20px] font-lato font-bold tracking-wide text-gray-900 animate-bounce">
                                        AL-MANSUR
                                    </h3>

                                    <span className="text-xs font-lato tracking-wide text-gray-500 uppercase">
                                        Front-End Developer
                                    </span>
                                </div>
                            </div>

                            <ul className="hidden md:flex gap-8 lg:gap-10 text-sm font-bold text-[#fff]">
                                <li className="hover:text-indigo-600 hover:scale-115 cursor-pointer transition">Home</li>
                                <li className="hover:text-indigo-600 hover:scale-115 cursor-pointer transition">About</li>
                                <li className="hover:text-indigo-600 hover:scale-115 cursor-pointer transition">Skills</li>
                                <li className="hover:text-indigo-600 hover:scale-115 cursor-pointer transition">Contact</li>
                                <li className="hover:text-indigo-600 hover:scale-115 cursor-pointer transition">Projects</li>
                            </ul>
                            <button className="hidden md:block bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-white px-5 lg:px-6 py-2 rounded-full text-sm hover:bg-indigo-700 transition">
                                Hire Me
                            </button>
                        </div>
                    </div>
                </div>
                {/* ================= Hero Section ================= */}
            </Container>
        </nav>
    )
}


