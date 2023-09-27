"use client"
import { IoMdHeart } from 'react-icons/io'
import mainIcon from "@/public/images/icons/footer/Logo-footer.svg";
import whiteLogo from "@/public/images/whiteLogo.svg";
import Image from 'next/image';
import { FooterItem } from './footer-item';
import instagram from '@/public/images/icons/footer/Instagram.svg';
import linkedin from '@/public/images/icons/footer/linkedin.svg';
import github from '@/public/images/icons/footer/GitHub.svg';

import Whiteinstagram from '@/public/images/icons/footer/WhiteInsta.svg';
import Whitelinkedin from '@/public/images/icons/footer/LinkedInWhite.svg';
import Whitegithub from '@/public/images/icons/footer/GitHubWhite.svg'



import { ThemeContextType } from '@/app/Context/IContext';
import context from '@/app/Context/ThemeContext';
import { useContext } from 'react';



const NAV_ITEMS = [


  {
    label: "Perfil",
    href: "#profile",
  },
  {
    label: "Competências",
    href: "#skills",
  },
  {
    label: "Destaques",
    href: "#emphasis",
  },

  {
    label: "Experiências",
    href: "#experience",
  },
  {
    label: "Contato",
    href: "#contact",
  }
]

export const Footer = () => {

  const { theme } = useContext<ThemeContextType>(context);

 
  const bgColorClass = theme ?   "bg-[#374250]" : "bg-white" ; 
  const textColorClass = theme ?  "text-white" : "text-gray-600" ;
  const imgSrc = theme ?  whiteLogo :  mainIcon;

  const imgSrc1 = theme? Whiteinstagram : instagram;
  const imgSrc2 = theme? Whitelinkedin : linkedin;
  const imgSrc3 = theme? Whitegithub : github;


  return (
    <footer id="contact"  className={`h-60 w-full flex flex-col items-center justify-center ${bgColorClass}`}>
      <div className=" w-[90%] h-[40%] flex justify-center item-center">
      <Image src={imgSrc} alt="Icaro" className="w-14 mt-5 mb-5" />
      

      </div>
      <div className="flex flex-row mb-4 sm:w-[90%]   w-[30%] h-[25%] sm:gap-10 gap-2 justify-center ">
          {
            NAV_ITEMS.map((item) => (
              <FooterItem {...item} key={item.label} />
            ))    
          }
        </div>
        <div className="border border-gray-400 w-[90%]"></div>
        <div className="flex gap-3 my-5">
          <a href="">
          <Image src={imgSrc1} alt="Instagram" className="w-7" />
          </a>
          <a href="https://github.com/icarodolzane" target="_blank">
          <Image src={imgSrc3} alt="github" className="w-7"  />
          </a>
          <a href="https://www.linkedin.com/in/icaro-feitosa-dolzane/" target="_blank">
          <Image src={imgSrc2} alt="linkedin" className="w-7"  />
          </a>

        </div>
   
        <span className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono mb-3 ${textColorClass}`}>
        Made with
        <IoMdHeart size={13} className="text-[#7E41CA]" />
        by
        <strong className="font-medium">Icaro Dolzane</strong>
      </span>
    </footer>
  )
}