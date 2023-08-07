import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { WorkExperience as IWorkExperience } from "@/app/types/work-experience"
type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

export const WorkExperience = ({experiences}: WorkExperienceProps) => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row ">
      <div className="max-w-[420px]">
        <SectionTitle title="Experiência Profissional" subtitle="experiências"/>
        <p className="text-gray-400 mt-6">
          Comecei a minha carreira como desenvolvedor em 2022, vindo da área de logística internacional na qual trabalhei por 4 anos, como analista de importação. Gosto de enfatizar esse background. E em agosto de 2023, iniciei a minha carreira como desenvolvedor web fullstack.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {
          experiences?.map((experience) => (
            <ExperienceItem
              key={experience.companyName}
              experience={experience}
            />
          ))
        }
      </div>
    </section>
  )
}