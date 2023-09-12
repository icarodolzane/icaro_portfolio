import { IoMdHeart } from 'react-icons/io'
import mainIcon from "@/public/images/icons/footer/Logo-footer.svg";
import Image from 'next/image';
import { FooterItem } from './footer-item';
import instagram from '@/public/images/icons/footer/Instagram.svg';
import linkedin from '@/public/images/icons/footer/linkedin.svg';
import github from '@/public/images/icons/footer/GitHub.svg'



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
  return (
    <footer id="contact" className="h-60  w-full flex flex-col items-center justify-center ">
      <div className=" w-[90%] h-[40%] flex justify-center item-center">
      <Image src={mainIcon} alt="Icaro" className="w-14 mt-5 mb-5" />
      

      </div>
      <div className="flex flex-row  w-[90%] h-[20%] gap-10 justify-center ">
          {
            NAV_ITEMS.map((item) => (
              <FooterItem {...item} key={item.label} />
            ))    
          }
        </div>
        <div className="border border-gray-400 w-[90%]"></div>
        <div className="flex gap-3 mt-2 ">
          <Image src={instagram} alt="Instagram" className="w-7" />
          <Image src={github} alt="github" className="w-7"  />
          <Image src={linkedin} alt="linkedin" className="w-7"  />
        </div>
   
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-600 mt-2 ">
        Made with
        <IoMdHeart size={13} className="text-[#7E41CA]" />
        by
        <strong className="font-medium">Icaro Dolzane</strong>
      </span>
    </footer>
  )
}