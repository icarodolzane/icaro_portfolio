import { HiArrowNarrowRight } from "react-icons/hi"
import { HorizontalDivider } from "@/app/components/divider/horizontal" 
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"

export const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques"/> 
      <HorizontalDivider className="mb-16"/>
      <div>
        <ProjectCard/>
        <HorizontalDivider />
        <ProjectCard/>
        <HorizontalDivider />
        <ProjectCard/>
        <HorizontalDivider />
        <p
          className="flex items-center gap-1.5"
        >
          <span className="text-gray-400">Tem interesse?</span>
          <Link className="inline-flex" href={'/projects'}>
            Ver todos...
            <HiArrowNarrowRight/>
          </Link>
        </p>
      </div>   
    </section>
  )
}