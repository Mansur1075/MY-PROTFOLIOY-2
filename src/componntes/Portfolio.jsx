import React from 'react'
import Container from './Container'

const Portfolio = () => {
  return (
   <section className='bg-linear-to-r  from-slate-900  to-slate-900 py-10'>
    <Container>
        <div className="">
            <div className=" text-center">
                <h3 className='text-[25px] uppercase text-[#00D3F3] font-lato '>Portfolio</h3>
                <h2 className='text-[50px] text-[#ffffffe4] font-bold font-lato'>Featured <span className='text-[50px] text-[#00D3F3] font-bold font-lato'>Projects</span></h2>
            </div>
            <div className="">
                <div className=" w-6/12">
                <img src="" alt="" />
                </div>
                <div className=" w-6/12"></div>
            </div>
        </div>
    </Container>
   </section>
  )
}

export default Portfolio