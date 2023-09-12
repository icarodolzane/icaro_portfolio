"use client";
import { SectionTitle } from "@/app/components/section-title";
import { KnownTech as IKnownTech } from "@/app/types/projects";
import { KnownTech } from "./known-tech";
import { motion } from "framer-motion";
import { HorizontalDivider } from "@/app/components/divider/horizontal";
type KnownTechProps = {
  techs: IKnownTech[];
};


const techIcons = [
  {
    id:1,
    image: "https://svgur.com/i/xVm.svg",
    
  },

  {
    id:2,
    image: "https://svgur.com/i/xWw.svg"
  },

  {
    id:3,
    image: "https://svgur.com/i/xVn.svg"
  },
  {
    id:4,
    image: "https://svgur.com/i/xWc.svg"
  },
  {
    id:5,
    image: "https://svgur.com/i/xWQ.svg"
  },
  {
    id:6,
    image: "https://svgur.com/i/xWR.svg"
  },

];

export const KnownTechs = ({ techs }: KnownTechProps) => {
  return (
    <>
      <section id="skills"  className=" overflow-x-hidden">
        <HorizontalDivider />
        <SectionTitle
          title="Conhecimentos"
          subtitle="competências"
          className="ml-6 sm:ml-32"
        />
        <div className="w-[95%] ml-3 pl-2 px-3 sm:ml-4 sm:pl-12  grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] ">
          {techs?.slice(0, 3).map((tech, i) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.10, delay: i * 0.1 }}
            >
             
              <KnownTech key={tech.name}  tech={tech} />
            </motion.div>
          ))}
        </div>

        <div className=" w-[95%] ml-3 pl-2 px-3  sm:pl-12  grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))]  ">

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
