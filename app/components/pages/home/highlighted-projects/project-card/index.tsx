'use client'
import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "@/app/components/link";
import { Project } from "@/app/types/projects";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";
import retangle from "@/public/images/ret.svg";
import { useContext } from "react";
import { ThemeContextType } from "@/app/Context/IContext";
import context from "@/app/Context/ThemeContext";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { theme } = useContext<ThemeContextType>(context);

  
  const bgColorClass = theme ? "bg-[#374250]" : "bg-white";
  const textColorClass = theme ?  "text-white" : "text-gray-900";
  const borderClass = theme ? "border-[#374250]" : "border-white"
  return (
    <div className="w-full flex flex-col sm:flex-row  ">
      <motion.div
        className="flex gap-6 lg:gap-12 flex-col lg:flex-row  mb-20 "
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-full  h-[260px] sm:h-[270px] lg:w-[420px]  mb-52 text-sm sm:text-base"
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image style={{ 
      
           borderRadius: '1rem'
        }}
            src={project.thumbnail.url}
            alt={`Thumbnail do projeto ${project.title}`}
            width={320}
            height={604}
            className=" h-full object-cover rounded-lg w-[80%] sm:w-full mb-8"
          />

          <motion.h3
            className={`flex items-center gap-3 font-medium  ${textColorClass}`}
            {...fadeUpAnimation}
            transition={{ duration: 0.7 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className={`${textColorClass} my-6`}
            {...fadeUpAnimation}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            {project.shortDescription}
          </motion.p>

          <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
            {project.technologies.map((tech, i) => (
              <TechBadge
                key={`${project.title}-tech-${tech.name}`}
                name={tech.name}
                {...techBadgeAnimation}
                transition={{ duration: 0.2, delay: 0.5 + i * 0.1 }}
              />
            ))}
          </div>

          <Link href={`/projects/${project.slug}`} className={`${textColorClass} mt-[-1rem] font-bold  `}>
            Ver projeto
            <HiArrowNarrowRight />
          </Link>
        </motion.div>
        
        
      </motion.div>


    </div>
  );
};
