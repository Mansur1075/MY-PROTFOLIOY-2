import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    const footerRef = useRef(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true)
                }
            },
            { threshold: 0.2 }
        )

        if (footerRef.current) observer.observe(footerRef.current)
    }, [])

    return (
        <footer
            ref={footerRef}
            className="py-10 bg-linear-to-br from-slate-800 via-slate-900 to-slate-800 text-white overflow-hidden"
        >
            <Container>
                <div className="flex justify-between">

                    {/* LEFT */}
                    <div
                        className={`w-4/12 transition-all duration-700 ease-out
                        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                    >
                        <div className="group flex items-center gap-4 cursor-pointer select-none">
                            <div className="p-3 rounded-xl bg-linear-to-r from-[#00D3F3] to-[#3B82F6] text-white">
                                <FaCode className="text-[32px]" />
                            </div>
                            <div>
                                <h3 className="text-[18px] font-bold">AL-MANSUR</h3>
                                <span className="text-xs text-gray-500 uppercase">
                                    Front-End Developer
                                </span>
                            </div>
                        </div>
                        <p className='text-[14px] text-gray-500 pt-6'>
                            Building fast, clean, and scalable web interfaces with React.
                        </p>
                    </div>

                    {/* MIDDLE */}
                    <div
                        className={`w-2/12 transition-all duration-700 ease-out delay-150
                        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                    >
                        <h3 className='text-[14px] text-[#00D3F3]'>QUICK LINKS</h3>
                        <ul className='flex flex-col gap-3 pt-5 text-[14px]'>
                            {['Home', 'About', 'Skills', 'Projects'].map(item => (
                                <li key={item} className="hover:text-[#00D3F3] cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div
                        className={`w-4/12 transition-all duration-700 ease-out delay-300
                        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}
                    >
                        <h3 className='text-[14px] text-[#00D3F3]'>GET IN TOUCH</h3>
                        <p className='text-[14px] text-gray-500 flex gap-2 pt-4 items-center'>
                            <FaGithub /> hmmansur050@gmail.com
                        </p>
                        <div className="flex pt-6 gap-4">
                            <button className="p-2 border bg-[#091B24] rounded-2xl hover:bg-[#00D3F3] duration-300">
                                <FaGithub />
                            </button>
                            <button className="p-2 border bg-[#091B24] rounded-2xl hover:bg-[#00D3F3] duration-300">
                                <FaLinkedinIn />
                            </button>
                        </div>
                    </div>

                </div>
            </Container>
        </footer>
    )
}

export default Footer
