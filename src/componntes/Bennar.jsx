import React from 'react'
import Container from './Container'
import { FaCloudDownloadAlt, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router'
import { MdEmail } from 'react-icons/md'
import mansur from "../assets/mansur.png"
import { GiThumbDown } from 'react-icons/gi'
import { DiReact } from 'react-icons/di'
import { GoDotFill } from 'react-icons/go'

const Bennar = () => {
    return (
        <section className='bg-linear-to-r  from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
            <div className="absolute rotate-40 -inset-5 pointer-events-none">
                <div className="absolute -top-75 animate-pulse left-207 w-32 h-32 bg-white/20 rounded-xl"></div>
                <div className="absolute top-60 right-32 w-24 h-24 animate-pulse bg-white/15 rounded-lg"></div>
                <div className="absolute bottom-62 left-1/4 w-40 h-40 animate-ping [animation-duration:2.5s] bg-white/30 rounded-2xl"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/20 animate-pulse rounded-xl"></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-white/20 animate-pulse rounded-xl"></div>
            </div>
            <Container>
                <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-indigo-600 font-bold font-lato text-[20px] mb-3">Hello, I’m</p>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#ffffff8a] leading-tight">
                            AL-Mansur <br />
                           <span className="text-[#7DD3FC] font-medium">Front-End Developer</span>
                        </h1>
                        <p className="text-gray-600 mt-4 font-lato max-w-lg text-[35px]">
                            I build <span className="bg-linear-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-bold"> fast, clean, </span> and scalable web interfaces with React.< DiReact className='animate-spin [animation-duration:3s] inline-block text-[50px] text-[#61DAFB]' />
                        </p>
                        <p className=' font-lato pt-4 text-[#667766c5] text-[18px]'>Frontend Developer specializing in React, Tailwind CSS, and modern JavaScript. I create
                            component-based architectures that are performant, maintainable, and built for production.</p>
                        <div className="flex gap-4 mt-8">
                            <button className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-linear-to-r from-[#00D3F3] to-[#3B82F6] text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition">
                                View Projects
                            </button>
                            <button className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] border font-bold font-lato border-indigo-600 text-indigo-600 px-6 py-3 rounded-full group-hover:bg-linear-to-r  group-hover:from-[#00D3F3] group-hover:to-[#3B82F6] hover:text-white transition">
                                Download CV<FaCloudDownloadAlt  className=' inline-block ml-2 '/>
                            </button>
                        </div>
                        <div className="flex gap-4 mt-12">
                            <ul className="flex gap-6 justify-center items-center">
                                <Link to="https://github.com/Mansur1075" target="_blank">
                                    <li className="relative group"> <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md"> GitHub  </span>
                                        <div className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] w-14 h-14 flex items-center justify-center rounded-full bg-[#ffffff71] text-gray-800 shadow-md cursor-pointer transition-all duration-300 group-hover:bg-gray-800 group-hover:text-white group-hover:-translate-y-2">
                                            <FaGithub size={22} />
                                        </div>
                                    </li>
                                </Link>
                                <Link to="" target='_blank'>
                                    <li className="relative group">
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                                            LinkedIn
                                        </span>
                                        <div className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] w-14 h-14 flex items-center justify-center rounded-full bg-[#ffffff71] text-blue-600 shadow-md cursor-pointer transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-2">
                                            <FaLinkedinIn size={22} />
                                        </div>
                                    </li>
                                </Link>
                                <Link to="https://mail.google.com/mail/u/0/#sent?compose=new" target='_blank'>
                                    <li className="relative group">
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                                            Email
                                        </span>
                                        <div className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] group w-14 h-14 flex items-center justify-center rounded-full bg-[#ffffff71] text-[#D93025] shadow-md cursor-pointer transition-all duration-300 hover:bg-[#D93025] hover:text-white hover:-translate-y-2">
                                            <MdEmail size={24} />
                                        </div>
                                    </li>
                                </Link>
                                <Link to="https://www.facebook.com/share/1DCu6RZx89/" target='blank' >
                                    <li className="relative group">
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">
                                           Facebook
                                        </span>
                                        <div className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] w-14 h-14 flex items-center justify-center rounded-full bg-[#ffffff71] text-[blue] shadow-md cursor-pointer transition-all duration-300 group-hover:bg-[#0000ffb7] group-hover:text-white group-hover:-translate-y-2">
                                            <FaFacebook size={24} />
                                        </div>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                    <div className="relative hidden md:flex justify-center ">
                        <div className="w-100 h-100 bg-indigo-600/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] "></div>
                        <div className="absolute w-90 h-90 bg-indigo-600/20 rounded-full">
                            <img className=' rounded-full w-full absolute -top-30 left-0' src={mansur} alt="" />
                        </div>
                    </div>
                </div>
                <div className="shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-10 w-6 h-10 border-2 border-white rounded-full mx-auto flex items-start justify-center">
                    <span className="mt-2 animate-bounce">
                        <GoDotFill className="text-white text-xs" />
                    </span>
                </div>
            </Container>
        </section>
    )
}

export default Bennar