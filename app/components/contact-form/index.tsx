'use client'

import { z } from 'zod'
import { SectionTitle } from '../section-title'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { fadeUpAnimation } from '@/app/lib/animations'




const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
<section className="px-3 justify-center md:px-12 py-4 md:py-12 flex flex-col md:flex-row items-center  bg-[#7E41CA]" id="contact">
  <div className=" flex flex-col md:flex-row  w-full md:w-2/3">
    <div>
      <h1 className="font-montserrat text-white text-3xl md:text-4xl font-normal leading-6 md:leading-8 tracking-tighter mb-4">
        Contato
      </h1>
      <p className="font-montserrat text-white  sm:text-xl font-normal leading-6 md:leading-8 tracking-tight">
        Vamos trabalhar juntos?<br />
        Clique no botão ao lado para entrar em contato.
      </p>
    </div>
    <div className="  flex justify-center items-center md:w-1/4 mt-2 md:ml-auto">
  <button className="h-10 w-32 md:w-48 border text-[#7E41CA] rounded-md border-actionable-item bg-white p-2 hover:opacity-40 transition-opacity">
    Clique aqui!
  </button>
    </div>
  </div>
</section>

  )
}