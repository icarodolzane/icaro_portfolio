import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { KnownTech as IKnownTech } from "@/app/types/projects"
import { CMSIcon } from "@/app/components/cms-icon"

// react https://svgur.com/i/xVn.svg
// ts https://svgur.com/i/xVm.svg
// angular https://svgur.com/i/xWQ.svg
// node https://svgur.com/i/xWc.svg
// next https://svgur.com/i/xWR.svg
// py https://svgur.com/i/xWw.svg
const techIcons = [
  {
    id:1,
    image: "https://svgur.com/i/xVm.svg"
  },

  {
    id:2,
    image: "https://svgur.com/i/xWw.svg"
  },

  {
    id:3,
    image: "https://svgur.com/i/xVn.svg"
  },
  {
    id:4,
    image: "https://svgur.com/i/xWc.svg"
  },
  {
    id:5,
    image: "https://svgur.com/i/xWQ.svg"
  },
  {
    id:6,
    image: "https://svgur.com/i/xWR.svg"
  },

];


type KnownTechProps = {
  tech: IKnownTech
}
export const KnownTech = ({tech}: KnownTechProps) => {
  

  const iconSize = "2rem";

  const relativeTime = getRelativeTimeString(new Date(tech.startDate), "pt-BR")?.replace("há ", "")
  console.log(techIcons)
  return (
<section id="skills" className=" container py-5 relative ">

<div className=" text-white flex items-center justify-center flex-col bg-[#7E41CA] h-40 w-30"  style={{ transform: 'skewX(-27deg)' }}>
<p className="font-medium  mr-9 mb-2" style={{ transform: 'skewX(27deg)' }}>{tech.name}</p>
    <div style={{ fontSize: iconSize,  transform: 'skewX(27deg)'   }}>
          <CMSIcon icon={tech.iconSvg} />
        </div>
     
      <span className="mt-2" style={{  transform: 'skewX(27deg)' }}>{relativeTime} de experiência.</span> 
      </div>

</section>
  )
}