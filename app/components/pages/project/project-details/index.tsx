'use client'
import { Button } from "@/app/components/button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/fi" 
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Project } from "@/app/types/projects"
import { RichText } from "@graphcms/rich-text-react-renderer"
import { motion } from "framer-motion"
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";
import mainIcon from '@/public/images/icons/Logoss.svg'
import Image from "next/image";

type ProjectDetailsProps = {
  project: Project
}

export const ProjectDetails = ({project}: ProjectDetailsProps) => {
  return (
    <section
      className=" w-full sm:min-h-[750px] flex flex-col  items-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden"
    >
      
      <motion.div
        className="absolut inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
        initial={{opacity: 0, scale: 0.3}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
      />
      
      <SectionTitle
      
        title="Projetos"
        subtitle="projetos"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <motion.div className="w-1/2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-700 my-8 rounded-full" 
       initial={{opacity: 0, scale: 0.3}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}></motion.div>
      <div className=" w-[90%] sm:w-[50%] lg:w-[90%] flex justify-center sm:justify-start">
      <div className=" md:mr-10 flex sm:items-start sm:justify-center items-center flex-col md:flex-row">
     <div className="   flex flex-col justify-center items-center w-full sm:w-[240px] lg:w-[600px]">

      <motion.h2 className="text-lg font-bold "   {...fadeUpAnimation}>{project.title}</motion.h2>
      <motion.div
        className="text-gray-600 text- max-w-[640px] my-4 sm:my-16 text-sm sm:text-base "
        {...fadeUpAnimation}
      >
        
        <RichText content={project.description.raw}/>
      </motion.div>
    
      <div className=" w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        {
          project.technologies.map((tech, i) => (
            <TechBadge
              key={`${project.slug}-${tech.name}`}
              name={tech.name}
              {...techBadgeAnimation}
              transition={{duration: 0.3, delay: i * 0.1}}
            />
          ))
        }
      </div>
      <motion.div
        className="my-6 sm:my-12 flex  gap-2 sm:gap-4 flex-col sm:flex-row"
        {...fadeUpAnimation}
      >
        {
          project?.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
            >
              <Button className="min-w-[180px] hover:shadow-button">
                <TbBrandGithub size={20}/>
              </Button>
            </a>
          )
        }
        {
          project?.liveProjectUrl && (
            <a
              href="github.com/trybe-futebol-club"
              target="_blank"
            >
              <Button className="min-w-[180px] hover:shadow-button">
                <FiGlobe size={20}/>
                Projeto Online
              </Button>
            </a>
          )
        }
      </motion.div>
      </div>
      <motion.div className="w-[200px] lg:w-[150px] sm:mt-0 mt-7 flex justify-center ml-4 sm:min-h-[450px] item-center lg:ml-72 sm:ml-0"  {...fadeUpAnimation}>
  
      <Image
        src={mainIcon}
        alt="icaro-logo"
        width={200.94}
        height={200.33}
  
      />
      </motion.div>
      </div>
      </div>

      {/* <Link href="/projects">
        <HiArrowNarrowLeft/>
        Voltar para projetos
      </Link> */}
    </section>
  )
}