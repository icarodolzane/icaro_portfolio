'use client'
import { Link } from "@/app/components/link"
import { SectionTitle } from "@/app/components/section-title"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { motion } from "framer-motion"
import { ThemeContextType } from "@/app/Context/IContext"
import context from "@/app/Context/ThemeContext"
import { useContext } from "react"
export const PageIntroduction = () => {
  const { theme } = useContext<ThemeContextType>(context);
  const bgColorClass = theme ?   "bg-[#374250]" : "bg-white" ; 
  const textColorClass = theme ?  "text-white" : "text-gray-600" ;
  return (
    <section
      className={`w-full h-[450px] lg:h-[630px] flex flex-col justify-center ${bgColorClass} `}
    >
      <motion.div className=" flex justify-center item-center"
         initial={{opacity: 0, scale: 0.3}}
         animate={{opacity: 1, scale: 1}}
         transition={{duration: 0.5}} >
         <motion.div className="  w-1/2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-700 my-8  rounded-full"   
      initial={{opacity: 0, scale: 0.3}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}} ></motion.div>
      </motion.div>
      <SectionTitle
        title="Meus projetos"
        subtitle="projetos"
        className={`text-center items-center [&>h3]:text-4xl ${textColorClass}`}
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 100}}
        transition={{duration: 0.6}}
      >
        <p className={`${textColorClass} text-center max-w-[640px] my-6 text-sm sm:text-base`}>Aqui você poderá ver alguns projetos de cunho pessoal, prontos ou em andamento, fique à vontade!
        </p>
        <Link className=" bg-[#7E41CA] w-30 h-10 px-2 hover:opacity-75 rounded-md text-white" href="/" >
          <HiArrowNarrowLeft size={20}/>
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}