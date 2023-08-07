import { SectionTitle } from "@/app/components/section-title"
import { KnownTech as IKnownTech} from "@/app/types/projects"
import { KnownTech } from "./known-tech"

type KnownTechProps = {
  techs: IKnownTech[]
}

export const KnownTechs = ({techs}: KnownTechProps) => {
  return (
    <section className="container py-16">
      <SectionTitle title="Conhecimentos" subtitle="competências"/>
      <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {
          techs?.map((tech) => (
            <KnownTech key={tech.name} tech={tech}/>
          ))
        }
      </div>
    </section>
  )
}