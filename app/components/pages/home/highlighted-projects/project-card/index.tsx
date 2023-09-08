'use client'
import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "@/app/components/link";
import { Project } from "@/app/types/projects";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";
import retangle from "@/public/images/ret.svg";

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
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
            className="w-full h-full object-cover rounded-lg"
          />

          <motion.h3
            className="flex items-center gap-3 font-medium text-lg text-gray-900"
            {...fadeUpAnimation}
            transition={{ duration: 0.7 }}
          >
            {project.title}
          </motion.h3>
          <motion.p
            className="text-gray-900 my-6"
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

          <Link href={`/projects/${project.slug}`} className="text-gray-900 mt-[-1rem]">
            Ver projeto
            <HiArrowNarrowRight />
          </Link>
        </motion.div>
        
        
      </motion.div>


    </div>
  );
};
