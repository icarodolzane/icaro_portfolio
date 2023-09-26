import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavItemProps = {
  label: string
  href: string
}
export const NavItem = ({label, href}: NavItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === href
  return  (
    <Link href={href}
      className={cn(
        "text-white flex items-center small-screen-font  small-font-fold   font-medium font-mono font-montserrat hover:opacity-70 ",
        isActive && "text-#aeb9c9",
       
      )}>
      
     
      {label}
    </Link>
  )
}