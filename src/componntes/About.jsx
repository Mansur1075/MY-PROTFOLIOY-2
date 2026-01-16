import React from 'react'
import Container from './Container'
import { FaCode } from 'react-icons/fa'
import { LuLayers } from 'react-icons/lu'
import { AiTwotoneThunderbolt } from 'react-icons/ai'
import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
    const [ref, visible] = useScrollReveal();
    return (
        <section id='about' className='bg-linear-to-r  from-slate-900  to-slate-900 py-15'>
           <div ref={ref} className={` ${visible
          ? "opacity-100 translate-y-0 scale-100 duration-1000 ease-in-out"
          : "opacity-0 translate-y-16 scale-95"}`}>
             <Container>
                <div className="">
                    <div className=" text-center w-12/12 justify-center">
                        <h4 className='text-[30px] font-lato text-[#039DB5]'>ABOUT ME</h4>
                        <h3 className='text-[40px] text-white font-bold font-lato pt-3'>Disciplined. Detail-oriented. <span className=' font-bold font-lato text-[40px] text-[#039DB5]'>Production-ready.</span></h3>
                    </div>
                    <div className=" flex gap-6">
                        <div className=" flex flex-col gap-10 pt-20 w-6/12">
                            <p className=' text-white text-[16px] font-lato'>
                                About MeDisciplined. Detail-oriented. Production-ready.I'm a
                                Frontend Developer who believes that great interfaces are
                                built on
                                a foundation of solid fundamentals. Every
                                component I create is thoughtfully designed
                                to be reusable, performant, and accessible.</p>
                            <p className=' text-white text-[16px] font-lato'>
                                My approach combines modern
                                React patterns with timeless web principles: semantic HTML,
                                responsive design, and progressive enhancement.
                                I don't just make things look good—I make them work
                                flawlessly across devices and browsers.</p>
                            <p className=' text-white text-[16px] font-lato'>
                                Whether it's optimizing bundle
                                sizes, implementing complex state management, or
                                integrating with REST APIs, I focus on solutions that are
                                maintainable and scalable for real-world production environments.</p>
                        </div>
                        <div className="w-6/12">
                            <div className="group flex gap-4 w-full px-4 py-5 mt-7 bg-[#0B0E14] border hover:scale-102 ease-in-out duration-300 cursor-pointer border-[#00D3F3]/40 rounded-2xl transition-all duration-300 hover:border-[#00D3F3] hover:shadow-[0_0_25px_rgba(0,211,243,0.15)]">
                                <div className="pt-6 px-5 pb-2 bg-[#0A1F28] text-3xl text-[#00D3F3] rounded-2xl transition-all duration-300  group-hover:shadow-[0_0_20px_rgba(0,211,243,0.4)]">
                                    <FaCode />
                                </div>
                                <div>
                                    <p className="text-[20px] text-white font-bold font-lato leading-tight">
                                        Clean Code
                                    </p>
                                    <p className="mt-1 text-[16px] font-lato text-gray-400 leading-relaxed">
                                        Writing maintainable, readable code that follows best practices and industry standards.
                                    </p>
                                </div>
                            </div>
                            <div className="group flex gap-4 w-full px-4 py-5 mt-7 bg-[#0B0E14] border hover:scale-102 ease-in-out duration-300 cursor-pointer border-[#00D3F3]/40 rounded-2xl transition-all duration-300 hover:border-[#00D3F3] hover:shadow-[0_0_25px_rgba(0,211,243,0.15)]">
                                <div className="pt-6 px-5 pb-2 bg-[#0A1F28] text-3xl text-[#00D3F3] rounded-2xl transition-all duration-300  group-hover:shadow-[0_0_20px_rgba(0,211,243,0.4)]">
                                   <LuLayers />
                                </div>
                                <div>
                                    <p className="text-[20px] text-white font-bold font-lato leading-tight">
                                       Component Architecture
                                    </p>
                                    <p className="mt-1 text-[16px] font-lato text-gray-400 leading-relaxed">
                                       Building reusable, modular components that scale with your application needs.
                                    </p>
                                </div>
                            </div>
                            <div className="group flex gap-4 w-full px-4 py-5 mt-7 bg-[#0B0E14] border hover:scale-102 ease-in-out duration-300 cursor-pointer border-[#00D3F3]/40 rounded-2xl transition-all hover:border-[#00D3F3] hover:shadow-[0_0_25px_rgba(0,211,243,0.15)]">
                                <div className="pt-6 px-5 pb-2 bg-[#0A1F28] text-3xl text-[#00D3F3] rounded-2xl transition-all duration-300  group-hover:shadow-[0_0_20px_rgba(0,211,243,0.4)]">
                                   <AiTwotoneThunderbolt />
                                </div>
                                <div>
                                    <p className="text-[20px] text-white font-bold font-lato leading-tight">
                                        Performance First
                                    </p>
                                    <p className="mt-1 text-[16px] font-lato text-gray-400 leading-relaxed">
                                        Optimizing every interaction for speed, efficiency, and exceptional user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
           </div>

        </section>
    )
}

export default About