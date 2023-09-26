"use client"
import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience"
import { ContactForm } from "@/app/components/contact-form"
import context from "@/app/Context/ThemeContext"
import { ThemeContextType } from "@/app/Context/IContext"
import { useContext } from "react"
type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export const WorkExperience = ({experiences}: WorkExperienceProps) => {
  const { theme } = useContext<ThemeContextType>(context);
  const bgColorClass = theme ? "bg-[#374250]" : "bg-white";
  const textColorClass = theme ?  "text-white" : "text-gray-600";
  return (
    <><section id="experience" className={`px-20 py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ${bgColorClass}` }>
      <div className="max-w-[420px]">
        <SectionTitle title="Experiência Profissional" subtitle="experiências" className={`${textColorClass}`} />
        <p className={`${textColorClass} mt-6`}>
          Comecei a minha carreira como desenvolvedor em 2022, vindo da área de logística internacional na qual trabalhei por 4 anos, como analista de importação. Gosto de enfatizar esse background. E em agosto de 2023, iniciei a minha carreira como desenvolvedor web fullstack.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {experiences?.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience} />
        ))}
      </div>
    </section>
    <ContactForm />
    </>
  )
}