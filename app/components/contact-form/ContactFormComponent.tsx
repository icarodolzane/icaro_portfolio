"use client";

import { z } from "zod";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { fadeUpAnimation } from "@/app/lib/animations";
import { useContext } from "react";
import context from "@/app/Context/ThemeContext";
import { ThemeContextType } from "@/app/Context/IContext";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {

  const { theme } = useContext<ThemeContextType>(context);

  
  const bgColorClass = theme ? "bg-[#374250]" : "bg-white";
  const textColorClass = theme ?  "text-white" : "text-black";
  const textColorClass2 = theme ?  "text-white" : "text-gray-600 ";
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <section
    className={`py-16 px-6 md:py-32 items-center justify-center flex flex-col ${bgColorClass}`}
      id="contact"
    >
      {/* <SectionTitle
          subtitle="contato"
          title="Converse comigo e compartilhe suas ideias, perguntas ou projetos emocionantes. Estou pronto para colaborar e tornar suas aspirações realidade!"
          className="items-center text-center text-gray-600"
        /> */}
       <motion.div
      className={`
        w-21.25rem
        h-4.5rem
        flex-shrink-0
        ${textColorClass}
        text-center
        font-montserrat
        text-3xl
        font-normal
        font-light
        leading-4.5rem
        tracking-tighter
        mb-4
        sm:mt-4
      `}
    
       initial={{opacity: 0, scale: 0.3}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}}>
        Contato
      </motion.div>

      <motion.div className="w-1/2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-700 my-8 rounded-full"   
      initial={{opacity: 0, scale: 0.3}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.5}} ></motion.div>

      <motion.h2 className={`text-xl lg:text-1xl text-center ${textColorClass2} w-[65%]`}  
       initial={{opacity: 0, scale: 0.3}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}>
        Converse comigo e compartilhe suas ideias, perguntas ou projetos
        emocionantes. Estou pronto para colaborar e tornar suas aspirações
        realidade!
      </motion.h2>
      <div className="w-full max-w-[420px] mx-auto">
        <motion.form
          className="mt-12 flex flex-col gap-4  "
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-[#7E41CA]  rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-[#7E41CA] "
            {...register("name")}
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-[#7E41CA] rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-[#7E41CA] "
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-[#7E41CA] rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-[#7E41CA] "
            {...register("message")}
            maxLength={500}
          />

          <div className="relative w-max mx-auto mt-6">
            <Button className="z-[2] relative" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-[#7E41CA] blur-2xl opacity-20" />
          </div>
        </motion.form>
      </div>
    </section>
  );
};
