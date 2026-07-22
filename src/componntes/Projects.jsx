import React from 'react';
import Container from './Container';
import { ExternalLink, Github, ShoppingCart, Store, FolderCode } from 'lucide-react';
import useScrollReveal from "../hooks/useScrollReveal";

const Projects = () => {
    const [ref, visible] = useScrollReveal();

    // ই-কমার্স এবং পোর্টফোলিও প্রজেক্টের লিস্ট
    const projectsData = [
        {
            id: 1,
            title: "Frontend E-commerce Web Project",
            description: "Built dynamic cart state, product filtering, dynamic routing, and REST API integration.",
            tech: ["React.js", "Tailwind CSS", "REST API", "Vercel"],
            liveLink: "https://ec-us-clint.vercel.app/",
            githubLink: "https://github.com/Mansur1075",
            icon: <ShoppingCart />
        },
        {
            id: 2,
            title: "Orebi E-commerce Web Platform",
            description: "Full-featured online store with responsive design, product catalog, and seamless checkout UI.",
            tech: ["Next.js", "React.js", "Tailwind CSS", "REST API"],
            liveLink: "https://orebi-2-2.vercel.app/",
            githubLink: "https://github.com/Mansur1075",
            icon: <Store />
        },
        {
            id: 3,
            title: "Personal Portfolio Website",
            description: "Modern interactive UI showcasing React & Next.js projects deployed on Vercel.",
            tech: ["React.js", "Tailwind CSS", "Framer Motion"],
            liveLink: "https://my-protfolioy-2.vercel.app/",
            githubLink: "https://github.com/Mansur1075",
            icon: <FolderCode />
        }
    ];

    return (
        <section id='projects' className='bg-linear-to-r transition-all duration-700 delay-200 from-slate-900 via-slate-800 to-slate-900 py-15'>
            <div ref={ref} className={`${visible
                ? "opacity-100 translate-y-0 scale-100 duration-1000 ease-in-out"
                : "opacity-0 translate-y-16 scale-95"}`}>
                <Container>
                    {/* Header Heading */}
                    <div className="lg:text-center text-center md:text-left mb-12">
                        <h4 className='text-[30px] font-lato text-[#039DB5] uppercase'>My Projects</h4>
                        <h3 className='text-[36px] md:text-[44px] text-white font-bold font-lato pt-2'>
                            Featured Work & <span className='text-[#039DB5]'>E-Commerce Applications</span>
                        </h3>
                    </div>

                    {/* Project Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                        {projectsData.map((project) => (
                            <div 
                                key={project.id}
                                className="group flex flex-col justify-between p-6 bg-[#0B0E14] border border-[#00D3F3]/40 rounded-2xl transition-all duration-300 hover:scale-102 hover:border-[#00D3F3] hover:shadow-[0_0_25px_rgba(0,211,243,0.15)]"
                            >
                                <div>
                                    {/* Icon & Title Header */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-[#0A1F28] text-2xl text-[#00D3F3] rounded-2xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,211,243,0.4)]">
                                            {project.icon}
                                        </div>
                                        <h5 className="text-[20px] text-white font-bold font-lato leading-tight">
                                            {project.title}
                                        </h5>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[15px] font-lato text-gray-400 leading-relaxed mb-5">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, index) => (
                                            <span 
                                                key={index} 
                                                className="text-[12px] bg-[#0A1F28] text-[#00D3F3] border border-[#00D3F3]/20 px-3 py-1 rounded-full font-lato"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons (Live Site & GitHub) */}
                                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#039DB5] hover:bg-[#028498] text-white font-bold rounded-xl text-[14px] font-lato transition-all duration-300 shadow-[0_0_15px_rgba(3,157,181,0.3)]"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a 
                                        href={project.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center p-2.5 bg-[#0A1F28] hover:bg-[#00D3F3]/20 text-[#00D3F3] border border-[#00D3F3]/40 rounded-xl transition-all duration-300"
                                        title="View GitHub Code"
                                    >
                                        <Github size={18} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Projects;