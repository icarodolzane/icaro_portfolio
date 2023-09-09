import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { KnownTech as IKnownTech } from "@/app/types/projects"
import { CMSIcon } from "@/app/components/cms-icon"

type KnownTechProps = {
  tech: IKnownTech
}
export const KnownTech = ({tech}: KnownTechProps) => {
  const relativeTime = getRelativeTimeString(new Date(tech.startDate), "pt-BR")?.replace("há ", "")
  return (
<section id="skills" className=" container py-5 relative ">

<div className=" text-white flex items-center justify-center flex-col bg-[#7E41CA] h-40 "  style={{ transform: 'skewX(-27deg)' }}>
    <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg}/>
      <span>{relativeTime} de experiência.</span> 
      </div>

</section>
  )
}