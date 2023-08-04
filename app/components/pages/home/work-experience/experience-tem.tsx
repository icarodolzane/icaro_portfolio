import Image from "next/image";
import  IATECAM from "../../../../../public/images/iatecam.png";
import { TechBadge } from "@/app/components/tech-badge";
export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image 
            src={IATECAM}
            alt="IATECAM-logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div
          className="h-full w-[1px] bg-gray-800"
        />
      </div>
      {/* conteudo */}
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base ">
          <a href="https://www.linkedin.com/company/iatecam-instituto-ambiental-e-tecnologico-da-amazonia/"
            target="_blank"
            className="text-gray-500 hove:text-emerald-500 transition-colors"
          >
            @Iatecam
          </a>
          <h4 className="text-gray-300">Desenvolvedor web fullstack</h4>
          <span className="text-gray-500">
            ago 2023 - 0 momento - (6 meses)
          </span>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Typescript" />
          <TechBadge name="Angular" />
          <TechBadge name="Python" />
          <TechBadge name="FastAPI" />
          <TechBadge name="MySQL" />
          <TechBadge name="Docker" />
        </div>
      </div>
    </div>
  )
}