import { cn } from "@/app/lib/utils"

type HorizontalDividerProps = {
  className?: string
}
export const HorizontalDivider = ({className}: HorizontalDividerProps) => {
  return (
    <div
      className={
        cn(
          "w-1/2", // Set the width to half on all screen sizes
          "h-1.5 sm:h-2", // Increase height on small screens
          "bg-gradient-to-r from-purple-400 via-blue-500 to-blue-700",
          "my-8 border-b",
          "ml-[-2rem] sm:ml-[-7rem]", // Adjusted margin on small screens
          className
        )
      }
    />
  )
}