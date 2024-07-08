import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiRedhat,
  DiDocker,
  DiJenkins,
  DiOpenshift,
  DiAws,
  DiScriptcs,
  DiMysql,
  DiPython,
  DiDatabase,
} from "react-icons/di"
import Reveal from "./Reveal"

const skills = [
    {
      category: 'DevOps and Infrastructure',
      technologies: [
        { name: 'RedHat', icon: <DiRedhat className='text-orange-600' /> },
        { name: 'Docker', icon: <DiDocker className='text-blue-600' /> },
        { name: 'Jenkins', icon: <DiJenkins className='text-pink-600' /> },
        { name: 'Openshift', icon: <DiOpenshift className='text-red-600' /> },
        { name: 'Aws', icon: <DiAws className='text-yellow-500' /> },
        { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
        // { name: 'React', icon: <Di className='text-blue-500' /> },
      ],
    },
    {
      category: 'Programming DB Frontend',
      technologies: [
        { name: 'SQL', icon: <DiDatabase className='text-green-500' /> },
        { name: 'Python', icon: <DiPython className='text-yellow-600' /> },
        // { name: 'React', icon: <DiReact className='text-blue-500' /> },
        { name: 'Html5', icon: <DiHtml5 className="text-orange-600 mx-2" />},
        { name: 'Css3', icon: <DiCss3 className='text-blue-500' /> },
        { name: 'Javascript', icon: <DiJavascript1 className='text-yellow-500' /> },
        
        
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            My projects are as  <a href="#" className="underline">follows</a>.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl">{tech.icon}</span>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills