import { cn } from "@/app/lib/utils"
import { motion } from "framer-motion"
type HorizontalDividerProps = {
  className?: string
}
export const HorizontalDivider = ({className}: HorizontalDividerProps) => {
  return (
    <motion.div
      className={
        cn(
          "w-1/2 border-none", 
          "h-1.5 sm:h-2", 
          "bg-gradient-to-r from-blue-400 via-blue-500 to-purple-700",
          "my-8 border-b rounded-r-full",
          "ml-[-2rem] sm:ml-[-7rem]",
          className
        )
      }
      initial={{opacity: 0, scale: 0.3}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}/>
  )
}