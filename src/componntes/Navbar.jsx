import React from 'react'
import Container from './Container'
import { MdOutlineDeveloperMode } from 'react-icons/md'
import { FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { VscVscodeInsiders } from 'react-icons/vsc'

export const Navbar = () => {
    return (
        <nav className='sticky  z-50 top-0 left-0 bg-linear-to-br from-slate-800 via-slate-900 to-slate-700 backdrop-blur shadow-sm'>
            <Container>
                {/* ================= Navbar ================= */}
                <div className="w-full">
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">
                            <div className="group flex items-center gap-4 cursor-pointer select-none">
                                <div className="p-3 rounded-xl bg-linear-to-r from-[#00D3F3] to-[#3B82F6] text-white 
                              group-hover:bg-white group-hover:text-black 
                                transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                                    <FaCode className=" text-[32px] group-hover:rotate-12 transition-transform duration-300" />
                                </div>
                                <div className="leading-tight">
                                    <h3 className="text-[20px] font-lato font-bold tracking-wide text-[#ffffff96] ">
                                        AL-MANSUR
                                    </h3>

                                    <span className="text-xs font-lato tracking-wide text-gray-500 uppercase">
                                        Front-End Developer
                                    </span>
                                </div>
                            </div>

                            <ul className="hidden md:flex gap-8 lg:gap-10 text-sm font-bold text-[#ffffffa1]">
                                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                                   <a href="/"> Home</a>
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                
                                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                                   <a href="#about"> About</a>
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </li>

                                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                                   <a href="#skills"> Skills</a>
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </li>

                                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                                    Contact
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </li>
                                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                                   <a href="#portfolio"> Projects</a>
                                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                                </li>
                            </ul>
                            <button className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] hidden md:block bg-linear-to-r from-[#00D3F3] to-[#3B82F6] text-white px-5 lg:px-6 py-2 rounded-full text-sm hover:bg-indigo-700 transition">
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


