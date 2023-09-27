'use client'
import Image from "next/image";
import { TechBadge } from "@/app/components/tech-badge";
import { WorkExperience } from "@/app/types/work-experience";
import { RichText } from "@/app/components/rich-text";
import { ptBR } from "date-fns/locale";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/lib/animations";
import { useContext } from "react";
import context from "@/app/Context/ThemeContext";
import { ThemeContextType } from "@/app/Context/IContext";

type ExperienceItemProps = {
  experience: WorkExperience
}

export const ExperienceItem = ({experience}: ExperienceItemProps) => {
  const { theme } = useContext<ThemeContextType>(context);
  const textColorClass = theme ? "text-white" :  "text-gray-700" ;
  const titles = theme ? "text-white" :  "text-black" ;
  const ColorCol = theme ? "bg-white" :  "bg-gray-500" ;
  const {
    endDate,
    companyName,
    companyLogo,
    companyUrl,
    description,
    role,
    technologies,
  } = experience

  const startDate = new Date(experience.startDate)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(new Date(endDate), 'MMM yyyy', { locale: ptBR })
    : 'Presente'

  const end = endDate ? new Date(endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`
  
  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{duration: 0.5}}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image 
            src={companyLogo.url}
            alt={`Logo da empresa ${companyName}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div
          className={`h-full w-[1px] bg-gray-800 ${ColorCol}`}
        />
      </div>
      {/* conteudo */}
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base ">
        <a
        href={companyUrl}
        target="_blank"
        className={`hover:bg-purple-700 transition-colors ${titles}`}
      >
            {companyName}
          </a>
          <h4 className={textColorClass}>{role}</h4>
          <span className={textColorClass}>
          {
            endDate ? formattedEndDate : `${formattedStartDate} • Presente • (${formattedDuration})`
          }
          </span>
          <div className={textColorClass}>
            <RichText content={description.raw}/>
          </div>
        </div>
        <p className={`text-sm mb-3 mt-6 font-semibold ${textColorClass}`}>Competências</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
        {technologies.map((tech, i) => (
            <TechBadge
              name={tech.name}
              key={`experience-${companyName}-tech-${tech.name}`}
              {...techBadgeAnimation}
              transition={{duration: 0.2, delay: i * 0.1}}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}