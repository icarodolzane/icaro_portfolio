import { HiArrowNarrowRight } from "react-icons/hi"
import { HorizontalDivider } from "@/app/components/divider/horizontal" 
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { ProjectCard } from "./project-card"
import { Project } from "@/app/types/projects"

type HighlightedProjectsProps = {
  projects: Project[]
}
export const HighlightedProjects = ({projects}: HighlightedProjectsProps) => {
  return (
    <section id="emphasis" className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" /> 
      <HorizontalDivider className="mb-16"/>
      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project}/>
            <HorizontalDivider/>
          </div>
        ))}
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