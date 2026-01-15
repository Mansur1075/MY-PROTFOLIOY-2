import React from 'react'
import Container from './Container'
import projct1 from "../assets/projct1.png"
import { BsGithub } from 'react-icons/bs'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const Portfolio = () => {
    return (
        <section className='bg-linear-to-r  from-slate-900  to-slate-900 py-10'>
            <Container>
                <div className="">
                    <div className=" text-center">
                        <h3 className='text-[25px] uppercase text-[#00D3F3] font-lato '>Portfolio</h3>
                        <h2 className='text-[50px] text-[#ffffffe4] font-bold font-lato'>Featured <span className='text-[50px] text-[#00D3F3] font-bold font-lato'>Projects</span></h2>
                        <p className=' text-[19px] text-[#ffffff93] font-lato pb-3'>Real-world applications built with production-grade code, optimized performance, and clean <br /> architecture.</p>
                    </div>
                    <div className=" pt-4 flex justify-between gap-7">
                        <div className=" w-6/12 relative group">
                            <div className=" p-5 border-3 cursor-pointer bg-[#ffffff7d] border-[#0C4D61] rounded-2xl">
                                <img className=' group-hover:scale-104 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out rounded-2xl' src={projct1} alt="" />
                                <div className=" w-full h-full bg-[#00d3f328] absolute top-0 left-0 rounded-2xl opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                                    <BsGithub className=' mt-35 ml-[50%] text-[35px]'/>
                                    <FaArrowUpRightFromSquare className=' -mt-9.5 ml-[42%] text-[40px] bg-[#00D3F3] py-3 text-white rounded-full'/>
                                </div>
                            </div>
                        </div>
                        <div className=" w-6/12">
                        <h2 className=' text-[30px] font-lato text-white'>Analytics Dashboard</h2>
                        <p className=' text-[16px] text-[#ffffff9d] font-lato font-medium pt-2'>Real-time analytics platform with interactive charts, data visualization, and responsive design. Built with React, Recharts, and Tailwind CSS.</p>
                        <div className=" py-5 bg-amber-200 border"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Portfolio