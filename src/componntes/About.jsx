import React from 'react'
import Container from './Container'

const About = () => {
    return (
        <section className='bg-linear-to-r  from-slate-900  to-slate-900 py-10'>
            <Container>
                <div className="">
                    <div className=" text-center w-12/12 justify-center">
                        <h4 className='text-[30px] font-lato text-[#039DB5]'>ABOUT ME</h4>
                        <h3 className='text-[40px] text-white font-bold font-lato pt-3'>Disciplined. Detail-oriented. <span className=' font-bold font-lato text-[40px] text-[#039DB5]'>Production-ready.</span></h3>
                    </div>
                    <div className=" flex">
                        <div className=" flex flex-col gap-10 pt-7 w-6/12">
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
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eveniet dignissimos quo, adipisci nulla placeat modi, et natus, aperiam deleniti sunt! Ratione nihil laudantium tempora quos in dolores aut enim.</p>
                       </div>
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default About