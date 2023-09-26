import Image from "next/image"
import frontendExample from "../../../../../../public/images/front-example.png"
import { Project } from "@/app/types/projects"
import { useContext } from "react"
import context from "@/app/Context/ThemeContext"
import { ThemeContextType } from "@/app/Context/IContext"

export type ProjectCardProps = {
  project: Project
}
export const ProjectCard = ({project}: ProjectCardProps) => {
  const { theme } = useContext<ThemeContextType>(context);
  const bgColorClass = theme ?   "bg-[#374250]" : "bg-white" ; 
  const textColorClass = theme ?  "text-white" : "text-gray-900" ;
  const technologies = project.technologies.map((tech) => tech.name).join(", ");

  return (
    <div className="rounded-lg 'h-[536px]  flex flex-col bg-[#7E41CA]  overflow-hidden border-5 border-gray-800 hover:border-[#7E41CA]  opacity-70 hover:opacity-100 transition-all group">
   
      <div className="w-full  overflow-hidden">
        <Image
          src={project.thumbnail.url}
          alt={`Thumbnail do projeto ${project.title}`}
          width={480}
          height={300}
          unoptimized
          className=" w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="  font-medium text-gray-50;90 group-hover:text-gray-800 transition-all">{project.title}</strong>
        <p className={`mt-2 ${textColorClass} line-clamp-4`}>{project.shortDescription}</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          {technologies}
        </span>
      </div>

    
    </div>
  )
}