'use client'
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav-item"
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  }
]
export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex justify-center">
      <div className="container flex items-center justify-between gap-5" >
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="icaro-logo"
            width={68}
            height={69}
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {
            NAV_ITEMS.map((item) => (
              <NavItem {...item} key={item.label}/>
            ))    
          }
        </nav>
      </div>
    </header>
  )
}