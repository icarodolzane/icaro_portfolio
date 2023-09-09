"use client";
import { SectionTitle } from "@/app/components/section-title";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { KnownTech } from "./known-tech";
import { motion } from "framer-motion";
import { HorizontalDivider } from "@/app/components/divider/horizontal";
type KnownTechProps = {
  techs: IKnownTech[];
};

export const KnownTechs = ({ techs }: KnownTechProps) => {
  return (
    <>
      <section id="skills" className=" overflow-x-hidden">
        <HorizontalDivider />
        <SectionTitle
          title="Conhecimentos"
          subtitle="competências"
          className="ml-6 sm:ml-32"
        />
        <div className="w-full sm:ml-[-7.5rem] sm:w-[100rem] lg:w-[100rem] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] ">
          {techs?.slice(0, 3).map((tech, i) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.10, delay: i * 0.1 }}
            >
              <KnownTech key={tech.name} tech={tech} />
            </motion.div>
          ))}
        </div>

        <div className=" w-full  sm:ml-[-7.5rem] sm:w-[100rem] grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))]">
          {techs?.slice(3, 99).map((tech, i) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.15, delay: i * 0.1 }}
            >
              <KnownTech key={tech.name} tech={tech} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
