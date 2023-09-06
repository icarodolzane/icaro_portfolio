'use client'
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"
import { motion } from "framer-motion"
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
export const Header = () => {  
  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-16 flex justify-center"
      initial={{top: -100}}
      animate={{top: 0}}
      transition={{duration: 0.5}}
       style={{ backgroundColor: '#7E41CA' }}

    >
      <div className="container flex items-center justify-start gap-3 sm:ml-[5rem]" >
        <Link href="/">
          <Image
            src="/images/Mainlogo.svg"
            alt="icaro-logo"
            width={22.94}
            height={27.33}
          />
        </Link>
        <nav className="flex items-center gap-2 mr-10  sm:gap-10  sm:ml-[5rem]  max-w-screen-xl  ">
          {
            NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label} />
            ))    
          }
        </nav>
      </div>
    </motion.header>
  )
}
