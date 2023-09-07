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
import linkedin from "@/public/images/icons/linkedin-icon.svg";
import github from "@/public/images/icons/github-icon.svg";



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

  console.log(homeInfo.socials[0].url)

  const DowloadResume = ():void => {
    const resumeFilePath = '/Icaro-Dolzane-pt-br.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeFilePath;
    downloadLink.download = 'Icaro-Dolzane-ptbr.pdf'; 
    downloadLink.click();
  }

  return (
    <section id="profile" className="w-full  lg:h-[755px]  flex flex-col justify-center pb-10 sm:pb-32 py-32 lg:pb-[110px] ">
      <div className="container  flex items-start justify-between flex-col-reverse lg:flex-row ">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >

          <div className="text-gray-900 flex flex-col items-center justify-center di my-6 text-sm sm: text-base">
            <Image
              width={340}
              height={280}
              src={MainLogo}
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


                {/* <Button className="shadow-button w-max max-w-[560px]  mt-[1rem] sm:mt-0"
      onClick={handleContact}
    >
      Entre em contato
      <HiArrowNarrowRight size={18}/>
    </Button> */}

              </div>

              <div className="text-2xl text-gray-600 flex items-center justify-center mt-3 sm:mt-0  gap-3 ">
                {/* {
      homeInfo.socials.map((contact) => (
        <a
          href={contact.url}
          target="_blank"
          className="hover:text-gray-900 transition-colors"
        >
          
          
          <CMSIcon icon={contact.iconSvg}/>
        </a>
      ))
    } */}
                <a href={homeInfo.socials[1].url}
                  target="_blank"
                  className="hover:text-blue-500 transition-colors">
                  <Image src={linkedin} alt="linkedin" width={30} />
                </a>

                <a href={homeInfo.socials[0].url}
                  target="_blank"
                  className="hover:text-green-500 transition-colors">
                  <Image src={github} alt="github" width={30} />
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