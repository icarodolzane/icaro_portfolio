'use client'
import Image from "next/image"
import { TechBadge } from "../../../tech-badge"
import { Button } from "../../../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { HomePageInfo } from "@/app/types/page-info"
import { RichText } from "@/app/components/rich-text"
import { CMSIcon } from "@/app/components/cms-icon"


type HomeSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({homeInfo}: HomeSectionProps) => {
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if(contactSection) {
      contactSection.scrollIntoView({behavior: "smooth"});
    }
  }
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-bold text-white mt-2">Icaro Dolzane</h2>
          <div className="text-gray-400 my-6 text-sm sm: text-base">
              <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {
              homeInfo.technologies.map((tech) => (
                <TechBadge name={tech.name}/>
              ))
            }
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button w-max"
              onClick={handleContact}
            >
              Entre em contato
              <HiArrowNarrowRight size={18}/>
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {
                homeInfo.socials.map((contact) => (
                  <a
                    href={contact.url}
                    target="_blank"
                    className="hover:text-gray-100 transition-colors"
                  >
                    <CMSIcon icon={contact.iconSvg}/>
                  </a>
                ))
              }
            </div>
          </div>
        </div>
        <Image
          width={320}
          height={480}
          src={homeInfo.profilePicture.url}
          alt="Icaro Dolzane"
          className="w-[300px] h-[380px] lg:w-[340px] lg:h-[480px]   rounded-lg mb-6 lg:mb-0 shadow-2xl object-cover"
        />
      </div>
    </section>
  )
}