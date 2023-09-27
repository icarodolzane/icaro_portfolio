"use client";
import { ThemeContextType } from "@/app/Context/IContext";
import context from "@/app/Context/ThemeContext";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion"

export const ToggleBtn = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(context);

  const border1 = theme ? "border-black" : "bg-white";


  const toggleButton = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, [setTheme]);

  return (
    <motion.div
  
    initial={{ top: -100 }}
    animate={{ top: 8 }}
    transition={{ duration: 0.7 }}
    
      className={`mt-12 h-10 flex items-end justify-end pb-1 ${
        theme ? "bg-[#374250]" : "bg-white"
      }`}
    >
      <label className="relative inline-flex items-center mr-5 cursor-pointer">
        <motion.input
        
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme}
          onChange={toggleButton}
        />
        <div className="w-12 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
      </label>
    </motion.div>
  );
};
