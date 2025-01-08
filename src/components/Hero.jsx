import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLink,
    AiOutlineLinkedin,
    AiOutlineSafetyCertificate,
} from "react-icons/ai";
import {
    DiAws,
    DiCss3,
    DiDocker,
    DiGit,
    DiGithub,
    DiHtml5,
    DiJavascript1,
    DiJenkins,
    DiLinux,
    DiNodejsSmall,
    DiOpenshift,
    DiPython,
    DiReact,
    DiRedhat,
} from "react-icons/di";
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative flex flex-col gap-5">
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <TypeAnimation
                        sequence={[
                            "Devops Engineer",
                            1000,
                            "Linux Administrator",
                            1000,
                            "RedHat Certified ",
                            1000
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                    >
                        HEY, I AM <br />
                        <span className="text-purple-500">Kishore Kumar </span>
                        <DiRedhat className="text-red-500 mx-2" />
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                    >
                        Enthusiastic and proactive student eager to explore the field of technology. Equipped with a solid foundation in programming languages and a knack for problem-solving. Ready to dive into the world of IT and make a meaningful
                        impact.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="max-[420px]:flex-col flex flex-row items-center gap-6 my-4 md:mb-0"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
                            href="https://drive.google.com/file/d/1sjcohOiXznsjfNEJPMA9Bpo9Zk-ADb3a/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                            className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
                            href="https://rhtapps.redhat.com/verify?certId=220-085-468"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Certifications
                        </motion.a>

                        <div className="max-[420px]:flex-col flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20 gitlink">
                            <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/kishore-kumar-dev">
                                <AiOutlineGithub />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/kishorekumars-/">
                                <AiOutlineLinkedin />
                            
                            </motion.a>
                            

    

                        </div>
                    </motion.div>
                </motion.div>


                <motion.img
                    src={profilepic}
                    className="w-[300px] md:w-[450px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />
            </div>
            <p className="text-gray-200 mr-6 mt-8 flex justify-center ">My Tech Stack</p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className="max-[420px]:grid grid-cols-3 flex flex-row flex-wrap text-7xl px-12  md:px-0 w-full justify-center items-center py-14"
            >
                
                <DiLinux className="text-black-1200 mx-2" />
                <DiDocker className="text-blue-600 mx-2" />
                <DiOpenshift className="text-red-500 mx-2" />
                <DiGit className="text-green-500 mx-2" />
                {/* <DiAws className="text-yellow-500 mx-2" /> */}
                <DiJenkins className="text-orange-600 mx-2" />
                <DiPython className="text-yellow-500 mx-2" />
                <DiHtml5 className="text-orange-600 mx-2" />
                <DiCss3 className="text-blue-600 mx-2" />
                <DiJavascript1 className="text-yellow-500 mx-2" />

                {/* <DiReact className="text-blue-500 mx-2" />
            <DiNodejsSmall className="text-green-500 mx-2" /> */}

            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>

        </div>
    )
}

export default Hero
