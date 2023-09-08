"use client";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HorizontalDivider } from "@/app/components/divider/horizontal";
import { Link } from "@/app/components/link";
import { SectionTitle } from "@/app/components/section-title";
import { ProjectCard } from "./project-card";
import { Project } from "@/app/types/projects";
import { motion } from "framer-motion";

type HighlightedProjectsProps = {
  projects: Project[];
};
export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <>
      <HorizontalDivider />
      <div className="border   flex flex-row justify-center items-center">
        <section
          id="emphasis"
          className="  py-16 w-[80rem] h-[50rem] flex flex-col  items-center  "
        >
          <SectionTitle
            title="Projetos em destaque"
            subtitle="destaques "
            className="ml-3   sm:ml-3"
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
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="border pl-3 ml-2 rounded-tl-lg rounded-bl-lg bg-[#7E41CA] h-72 sm:h-52 w-full sm:mt-[-1rem] flex items-center justify-start"
        >
          <div className="flex justify-center items-start flex-col">
            <Link href={"/projects"} className="mb-2">
              Ver Projetos...
              <HiArrowNarrowRight />
            </Link>
            <p className="font-montserrat text-xs sm:text-sm font-normal font-light tracking-tighter text-white">
              Tenha uma visão de alguns dos meus projetos em diversas fases,
              alguns já finalizados e outros em progresso. Sinta-se à vontade
              para explorar!
            </p>
          </div>
        </motion.div>
      </div>
      <HorizontalDivider />
    </>
  );
};
