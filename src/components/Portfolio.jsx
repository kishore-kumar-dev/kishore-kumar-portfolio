import React from 'react';
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Project #1 - AcePhish",
      description: "Model for Detecting Phishing Links using Machine Learning.",
      links: {
        site: "https://drive.google.com/file/d/1lose_cicYFAva7yAKf5kLwNosUXIGOg5/view?usp=sharing",
        github: "https://github.com/kishore-kumar-dev/Acephish-Phish-Detector.git",
      },
    },
    {
      img: project2,
      title: "Project #2 - Galleria",
      description: "A simple Google Photos Clone built with React.",
      links: {
        site: "https://drive.google.com/file/d/1T3eLZH8TJ7vjYHaqW0rQbzr_uzsKVSAk/view?usp=sharing",
        github: "https://github.com/kishore-kumar-dev/Galleria-Photo-gallery.git",
      },
    },
    // {
    //   img: project4,
    //   title: "Project #3",
    //   description: "An e-commerce platform with various features.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
    // {
    //   img: project5,
    //   title: "Project #4",
    //   description: "A mobile-friendly application using React Native.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
    // {
    //   img: project6,
    //   title: "Project #5",
    //   description: "A data visualization project using D3.js and other libraries.",
    //   links: {
    //     site: "#",
    //     github: "#",
    //   },
    // },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Demo
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            // </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio