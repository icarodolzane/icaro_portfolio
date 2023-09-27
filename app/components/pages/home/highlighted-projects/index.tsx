"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import { Project } from "@/app/types/projects";
import { motion } from "framer-motion";
import { ThemeContextType } from "@/app/Context/IContext";
import context from "@/app/Context/ThemeContext";
import { useContext } from "react";

type HighlightedProjectsProps = {
  projects: Project[];
};
export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  const { theme } = useContext<ThemeContextType>(context);

  
  const bgColorClass = theme ? "bg-[#374250]" : "bg-white";
  const textColorClass = theme ?  "text-white" : "text-black";
  const borderClass = theme ? "border-[#374250]" : "border-white"
  return (
    <div className={` ${bgColorClass} border ${borderClass} `}>
      <HorizontalDivider />
      <div className=" py-16 flex flex-row justify-center items-center">
        <section
          id="emphasis"
          className="  py-16 w-[80rem] h-[50rem] flex flex-col  items-center  "
        >
          <SectionTitle
            title="Projetos em destaque"
            subtitle="destaques "
            className={`ml-3   sm:ml-3 ${textColorClass}`}
          />

          <div className=" pt-20 sm:pt-32 px-2">
            {projects?.map((project) => (
              <div key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        <motion.div
            
            style={{ borderTopLeftRadius: "2rem",
            borderBottomLeftRadius: "2rem"}}
         
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className=" pl-2 sm:pl-16 ml-3 pr-1 sm:pr-7 rounded-tl-lg rounded-bl-lg bg-[#7E41CA] h-72 sm:h-52  sm:mt-[-3rem] mt-[-5rem] flex items-center justify-start text-center sm:text-left border "
        >
          <div className="flex justify-center items-start flex-col ">
            <Link href={"/projects"} className="mb-3 sm:ml-0 ml-4 font-bold  text-white ">
              Ver Projetos...
             <HiArrowNarrowRight />
            </Link>
            <p className=" projectBar font-normal font-light tracking-tighter text-white">
              Tenha uma visão de alguns dos meus projetos em diversas fases,
              alguns já finalizados e outros em progresso. Sinta-se à vontade
              para explorar!
            </p>
          </div>
        </motion.div>
      </div>
      <HorizontalDivider />
    </div>
  );
};
