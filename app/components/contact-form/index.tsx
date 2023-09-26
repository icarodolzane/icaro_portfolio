import Link from "next/link";

export const ContactForm = () => {
  return (
    <section
      className="px-3 justify-center md:px-12 py-4 md:py-12 flex flex-col md:flex-row items-center  bg-[#7E41CA]"
      id="contact"
    >
      <div className=" flex flex-col md:flex-row  w-full md:w-2/3  sm:justify-center sm:items-center ">
        <div>
          <h1 className="  w-full flex sm:justify-start justify-center text-white text-3xl md:text-4xl   leading-2 md:leading-8 tracking-tighter sm:mb-4 mb-2 sm:mt-5">
            Contato
          </h1>
          <p className=" text-white flex sm:justify-start justify-center sm:text-left text-center  sm:text-xl font-normal leading-6 md:leading-8 tracking-tight">
            Vamos trabalhar juntos?
            <br />
            Clique no botão ao lado para entrar em contato.
          </p>
        </div>
        <div className="flex justify-center items-center md:w-1/4 mt-2 sm:mt-11 md:ml-auto">
          <Link href="/contact">
            <button className="h-10 w-32 md:w-48 border text-[#7E41CA] rounded-md border-actionable-item bg-white p-2 hover:opacity-40 transition-opacity">
              Clique aqui!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

