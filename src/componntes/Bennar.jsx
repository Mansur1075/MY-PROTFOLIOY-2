import React from 'react'
import Container from './Container'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router'
import { MdEmail } from 'react-icons/md'
import mansur from "../assets/mansur.png"
import { GiThumbDown } from 'react-icons/gi'

const Bennar = () => {
    return (
        <section className='bg-linear-to-r from-green-100 via-blue-400 to-purple-400'>
            <Container>
                <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-indigo-600 font-bold font-lato text-[20px] mb-3">Hello, I’m</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            AL-Mansur <br />
                            <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                                Front-End Developer
                            </span>
                        </h1>
                        <p className="text-gray-600 mt-4 font-lato max-w-lg text-[35px]">
                            I build <span className="bg-linear-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold"> fast, clean, </span> and scalable web interfaces with React.
                        </p>
                        <p className=' font-lato pt-4'>Frontend Developer specializing in React, Tailwind CSS, and modern JavaScript. I create
                            component-based architectures that are performant, maintainable, and built for production.</p>
                        <div className="flex gap-4 mt-8">
                            <button className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
                                View Projects
                            </button>
                            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-600 hover:text-white transition">
                                Download CV
                            </button>
                        </div>
                        <div className="flex gap-4 mt-12">
                            <ul className="flex gap-6 justify-center items-center">
                                <Link to="https://github.com/Mansur1075" target="_blank">
                                    <li className="relative group"> <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md"> GitHub  </span>
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#ffffff71] text-gray-800 shadow-md cursor-pointer transition-all duration-300 group-hover:bg-gray-800 group-hover:text-white group-hover:-translate-y-2">
                                            <FaGithub size={22} />
                                         </div>
                                    </li>
                                </Link>
                                <Link to="" target='_blank'>

                                    <li className="relative group">
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                                            LinkedIn
                                        </span>
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#ffffff71] text-blue-600 shadow-md cursor-pointer transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-2">
                                            <FaLinkedinIn size={22} />
                                        </div>
                                    </li>
                                </Link>
                                <Link to="https://mail.google.com/mail/u/0/#sent?compose=new" target='_blank'>

                                    <li className="relative group">
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                                            Email
                                        </span>
                                        <div className="group w-14 h-14 flex items-center justify-center rounded-full bg-[#ffffff71] text-[#D93025] shadow-md cursor-pointer transition-all duration-300 hover:bg-[#D93025] hover:text-white hover:-translate-y-2">
                                            <MdEmail size={24} />
                                        </div>
                                    </li>
                                </Link>
                                <Link to="https://www.facebook.com/share/1DCu6RZx89/" target='blank' >
                                    <li className="relative group">
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                                            Email
                                        </span>
                                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#ffffff71] text-[blue] shadow-md cursor-pointer transition-all duration-300 group-hover:bg-[#0000ffb7] group-hover:text-white group-hover:-translate-y-2">
                                            <FaFacebook size={24} />
                                        </div>
                                    </li>
                                </Link>

                            </ul>
                        </div>

                    </div>
                    <div className="relative hidden md:flex justify-center">
                        <div className="w-100 h-100 bg-indigo-600/10 rounded-full"></div>
                        <div className="absolute w-90 h-90 bg-indigo-600/20 rounded-full">
                        <img className=' rounded-full w-full absolute -top-30 left-0' src={mansur} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Bennar