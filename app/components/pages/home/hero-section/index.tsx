import Image from "next/image"
import { TechBadge } from "../../../tech-badge"
import { Button } from "../../../button"
import { HiArrowNarrowRight } from "react-icons/hi"
import { TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb"

const MOCK_CONTACTS=[
  {
    url: "https://www.linkedin.com/in/icaro-dolzane/",
    icon: <TbBrandLinkedin/>,
  },
  {
    url: "https://github.com/icaro-dolzane",
    icon: <TbBrandGithub/>,
  },
  {
    url: "https://wa.me/5511999999999",
    icon: <TbBrandWhatsapp/>,
  }
]

export const HeroSection = () => {
  return (
    <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-bold text-white mt-2">Icaro Dolzane</h2>
          <p className="text-gray-400 my-6 text-sm sm: text-base">
              Sou bacharel em administração e desenvolvedor backend e frontend, apaixonado por tecnologia e aprender coisas novas. Gosto muito de trabalhar em equipe e desafios. 
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {
              Array.from ({length: 5}).map((_, index) => (
                <TechBadge name="Next.js" key={index} />
              ))
            }
          </div>
          <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="shadow-button w-max">
              Entre em contato
              <HiArrowNarrowRight size={18}/>
            </Button>
            <div className="text-2xl text-gray-600 flex items-center h-20 gap-3">
              {
                MOCK_CONTACTS.map((contact, index) => (
                  <a
                    key={`contact-${index}`}
                    href={contact.url}
                    target="_blank"
                    className="hover:text-gray-100 transition-colors"
                  />
                ))
              }
            </div>
          </div>
        </div>
        <Image
          width={320}
          height={480}
          src={"/images/profile-pic.jpg"}
          alt="Icaro Dolzane"
          className="w-[300px] h-[380px] lg:w-[340px] lg:h-[480px]   rounded-lg mb-6 lg:mb-0 shadow-2xl object-cover"
        />
      </div>
    </section>
  )
}