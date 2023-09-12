"use client"
import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type FooterItemProps = {
  label: string
  href: string
}
export const FooterItem = ({label, href}: FooterItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href
  return  (
    <Link href={href}
      className={cn(
        "text-[#7E41CA] flex items-center small-screen-font text-xs small-font-fold    font-medium font-mono font-montserrat hover:opacity-70 ",
        isActive && "text-#aeb9c9",
       
      )}>
      
     
      {label}
    </Link>
  )
}