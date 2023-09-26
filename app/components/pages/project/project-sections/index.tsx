'use client'
import Image from "next/image";
import { ProjectSection } from "@/app/types/projects";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/app/lib/animations";

type ProjectSectionsProps = {
  sections: ProjectSection[]
}

export const ProjectSections = ({sections}: ProjectSectionsProps) => {
  return (
    <section>
    <div className="bg-[#7E41CA] h-8"></div>
    <div className="bg-[#BFA4FF] h-8"></div>
    <div className=" flex-wrap gap-16 items-center justify-center flex flex-col sm:flex-row bg-[#7E41CA] py-16">
      {
        sections.map((section, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-6 md:gap-12 w-72 sm:w-1/3"
            {...fadeUpAnimation}
            transition={{duration: 0.5 }}
          >
            <h2
              className="text-2xl md:text-3xl font-medium text-white"
            >
              {section.title}
            </h2>
            <Image
              src={section.image.url}
              alt=""
              width={600}
              height={300}
              className="sm:w-full aspect-auto rounded-lg object-cover w-72  "
              unoptimized
            />
          </motion.div>
        ))
      }
    </div>
    <div className="bg-[#BFA4FF] h-8"></div>
    <div className="bg-[#7E41CA] h-8"></div>
</section>
  )
}