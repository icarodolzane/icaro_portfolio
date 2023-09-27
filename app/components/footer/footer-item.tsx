"use client"
import { ThemeContextType } from "@/app/Context/IContext"
import context from "@/app/Context/ThemeContext"
import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useContext } from "react"

type FooterItemProps = {
  label: string
  href: string
}
export const FooterItem = ({label, href}: FooterItemProps) => {
  const { theme } = useContext<ThemeContextType>(context);

  const textColorClass = theme ?  "text-white" : "text-[#7E41CA]" ; 
  const pathName = usePathname();
  const isActive = pathName === href
  return  (
    <Link href={href}
    className={cn(
      textColorClass,
      "flex items-center sm:text-sm  text-xs font-normal font-mono font-montserrat hover:opacity-70",
      isActive && "text-#aeb9c9"
    )}>
      
     
      {label}
    </Link>
  )
}