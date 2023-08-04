import { Button } from "@/app/components/button"
import { SectionTitle } from "@/app/components/section-title"
import { TechBadge } from "@/app/components/tech-badge"
import { TbBrandGithub } from "react-icons/tb"
import { FiGlobe } from "react-icons/fi" 
import { Link } from "@/app/components/link"
import { HiArrowNarrowLeft } from "react-icons/hi"
export const ProjectDetails = () => {
  return (
    <section
      className="w-full sm:min-h-[750px] flex flex-col justify-end items-center relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden"
    >
      <div
        className="absolut inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover,`,
        }}
      />
      <SectionTitle
        title="Trybe Futebol Clube"
        subtitle="projetos"
        className="text-center items-center sm:[&>h3]:text-4xl"
      />
      <p className="text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base">
      O TFC é um site informativo sobre partidas e classificações de futebol! Nele foi desenvolvido uma API integrado ao Frontend - através do docker-compose -  consumindo um banco de dados. Modelagem de dados através do Sequelize. 
      Login com validações no backend com Token, Adicionar uma partida, atualizar uma partida, deletar uma partida e conferir um LeaderBoard com os resultados. 
      </p>
      <div className="w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center">
        <TechBadge name="React.js"/>
        <TechBadge name="Typescript.js"/>
        <TechBadge name="Express.js/Node"/>
        <TechBadge name="Sequelize/MySQL"/>
        <TechBadge name="Docker"/>
      </div>
      <div className="my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row">
        <a
          href="github.com/trybe-futebol-club"
          target="_blank"
        >
          <Button className="min-w-[180px] hover:shadow-button">
            <TbBrandGithub size={20}/>
            Repositório
          </Button>
        </a>
        <a
          href="github.com/trybe-futebol-club"
          target="_blank"
        >
          <Button className="min-w-[180px] hover:shadow-button">
            <FiGlobe size={20}/>
            Projeto Online
          </Button>
        </a>
      </div>
      <Link href="/projects">
        <HiArrowNarrowLeft/>
        Voltar para projetos
      </Link>
    </section>
  )
}