'use client'
import Link from "next/link"
import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects"
import { motion } from "framer-motion"
import { fadeUpAnimation } from "@/app/lib/animations"
import { useContext } from "react"
import context from "@/app/Context/ThemeContext"
import { ThemeContextType } from "@/app/Context/IContext"

type ProjectsListProps = {
  projects: Project[]
}

export const ProjectList = ({ projects }: ProjectsListProps) => {
  const { theme } = useContext<ThemeContextType>(context);
  const bgColorClass = theme ?   "bg-[#374250]" : "bg-white" ; 
  const textColorClass = theme ?  "text-white" : "text-gray-600" ;
  return (
    <section className={` ${bgColorClass} px-20  py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6`}>
      {
        projects.map((project, i) => (
          <motion.div
            key={project.title}
            {...fadeUpAnimation}
            transition={{duration: 0.5, delay: i * 0.1}}
          >
              <Link
                href={`/projects/${project.slug}`}
              >
                <ProjectCard project={project}/>
              </Link>
          </motion.div>
      
        ))
      }  
    </section>
  )
}