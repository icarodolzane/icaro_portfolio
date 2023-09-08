import { cn } from "@/app/lib/utils"

type HorizontalDividerProps = {
  className?: string
}
export const HorizontalDivider = ({className}: HorizontalDividerProps) => {
  return (
    <div
      className={
        cn(
          "w-1/2", 
          "h-1.5 sm:h-2", 
          "bg-gradient-to-r from-blue-400 via-blue-500 to-purple-700",
          "my-8 border-b",
          "ml-[-2rem] sm:ml-[-7rem]", 
          className
        )
      }
    />
  )
}