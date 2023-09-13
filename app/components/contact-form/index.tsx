
import Link from 'next/link'






export const ContactForm = () => {



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
      <Link href="/contact">
  <button className="h-10 w-32 md:w-48 border text-[#7E41CA] rounded-md border-actionable-item bg-white p-2 hover:opacity-40 transition-opacity">
    Clique aqui!
  </button>
  </Link>
    </div>
  </div>
</section>

  )
}