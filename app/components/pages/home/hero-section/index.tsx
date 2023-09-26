'use client'
import Image from "next/image"
import { TechBadge } from "../../../tech-badge"
import { Button } from "../../../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { HomePageInfo } from "@/app/types/page-info"
import { RichText } from "@/app/components/rich-text"
import { CMSIcon } from "@/app/components/cms-icon"
import { motion } from "framer-motion"
import { techBadgeAnimation } from "@/app/lib/animations"
import ProfilePic from "@/public/images/profile-pic.png";
import MainLogo from "@/public/images/icons/Logo.png";
import MainWhiteLogo from "@/public/images/white-main-logo.svg";
import linkedin from "@/public/images/icons/linkedin-icon.svg";
import github from "@/public/images/icons/github-icon.svg";
import context from '@/app/Context/ThemeContext';
import { useContext } from "react"
import { ThemeContextType } from "@/app/Context/IContext"

import linkedinWhite from '@/public/images/icons/footer/linkedinNew.svg';
import githubWhite from '@/public/images/icons/footer/GlicHub.svg'


type HomeSectionProps = {
  homeInfo: HomePageInfo
}

export const HeroSection = ({homeInfo}: HomeSectionProps) => {
  const { theme, setTheme } = useContext<ThemeContextType>(context);
  
  const textColorClass = theme ?  "text-white" : "text-gray-900";
  const linkSrc = theme ? linkedinWhite : linkedin;
  const linkSrc2 = theme ? githubWhite : github;
  const logoSrc = theme ? MainWhiteLogo : MainLogo;
  const handleContact = () => {
    const contactSection = document.querySelector("#contact");
    if(contactSection) {
      contactSection.scrollIntoView({behavior: "smooth"});
    }
  }

  console.log(homeInfo.socials[0].url)

  const DowloadResume = ():void => {
    const resumeFilePath = '/Icaro-Dolzane-pt-br.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
    downloadLink.download = 'Icaro-Dolzane-ptbr.pdf'; 
    downloadLink.click();
  }

  return (
    <section
      id="profile"
      className={`w-full lg:h-[755px] flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px] ${
        theme ? 'bg-[#374250]' : 'bg-white'
      }`}
    >
      <div className="container  flex items-start justify-between flex-col-reverse lg:flex-row ">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
    <div className={`flex flex-col items-center justify-center my-6 text-sm sm:text-base ${textColorClass}`}>
            <Image
              width={340}
              height={280}
              src={logoSrc}
              alt="Icaro Dolzane"
              className=" rounded-lg mb-6 lg:mb-0 sm:mt-1" />
            <RichText content={homeInfo.introduction.raw} />
          </div>
          {/* <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
      {
        homeInfo.technologies.map((tech, i) => (
          <TechBadge
            name={tech.name}
            key={`intro-tech-${tech.name}`}
            {...techBadgeAnimation}
            transition={{duration: 0.2, delay: i * 0.1}}

          />
        ))
      }
    </div> */}<div className="flex items-center justify-center h-30 ">
            <div className=" flex sm:items-center sm:gap-2 flex-col sm:flex-row  ">


              <Button className=" w-max  "
                onClick={DowloadResume}
              >
                Baixar Currículo

              </Button>
              <div>




              </div>

              <div className="text-2xl text-gray-600 flex items-center justify-center mt-3 sm:mt-0  gap-3 ">
          
                <a href={homeInfo.socials[1].url}
                  target="_blank"
                  className="hover:text-[#7E41CA] transition-colors">
                  <Image src={linkSrc} alt="linkedin" width={30} />
                </a>

                <a href={homeInfo.socials[0].url}
                  target="_blank"
                  className="hover:text-[#7E41CA] transition-colors">
                  <Image src={linkSrc2} alt="github" width={30} />
                </a>

              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"

        >
          <Image


            src={ProfilePic}
            alt="Icaro Dolzane"
            className=" mt-20 rounded-lg mb-6 lg:mb-0 object-cover" />
        </motion.div>
      </div>

    </section>
  )
}