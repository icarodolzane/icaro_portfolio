'use client'
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"
import { motion } from "framer-motion"
import { useContext, useState } from "react"
import context from '@/app/Context/ThemeContext'
import { ThemeContextType } from "@/app/Context/IContext"


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
  const { theme, setTheme } = useContext<ThemeContextType>(context);


 
  

 
  return (
    <><motion.header
      className="absolute top-0 w-full z-10 h-12 flex justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#7E41CA' }}

    >
      <div className="container flex items-center sm:justify-start justify-center gap-4 sm:gap-1 sm:ml-[5rem] small-font-fold">
        <Link href="/">
          <Image className="hidding"
            src="/images/Mainlogo.svg"
            alt="icaro-logo"
            width={22.94}
            height={27.33} />
        </Link>
        <nav className="flex items-center gap-3  sm:gap-10  sm:ml-[5rem]   max-w-screen-xl  small-font-margin  ">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>



      </div>
    </motion.header>

     

      </> 
  )
}


