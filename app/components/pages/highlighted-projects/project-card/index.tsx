import Image from "next/image"
import frontendExampleImage from "../../../../../public/images/front-example.png"
import { TechBadge } from "@/app/components/tech-badge"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "@/app/components/link"
export const ProjectCard = () => {
  return (
    <div 
      className="flex gap-6 lg:gap-12 flex-col lg:flex-row"
    >
      <div className="w-full h-full">
        <Image
          src={frontendExampleImage}
          alt="project-thumbnail"
          width={420}
          height={304}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt="icon"
            src="/images/icons/project-title-icon.svg"
          />
          Trybe Futebol Clube
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas adipisci ut minus corrupti a. Tempore non libero qui nam! Voluptas eos quidem soluta iure officiis! Quasi unde, corrupti et earum nihil minus error ducimus at ipsum suscipit impedit quidem, tempora iste, illo sed assumenda quod vel! Fugiat nobis mollitia saepe.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="React.js"/>
          <TechBadge name="Typescript.js"/>
          <TechBadge name="Express/Node"/>
          <TechBadge name="MySQL"/>
          <TechBadge name="Sequelize"/>
          <TechBadge name="Docker"/>
        </div>
        <Link href={'github.com/icarodolzane'}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}