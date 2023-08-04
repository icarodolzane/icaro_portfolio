import Image from "next/image";
import { ProjectDetails } from "../project-details";

const sections =[
  {
    title: 'Login',
    image: 'https://www.usandopy.com/media/images/article/Posts__Youtube_covers_-_2_64.jpg',
  },
  {
    title: 'Adicionar partida',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZDqbMzgVJPMXba0bOtXjwx_T0ABI7GZzlPrtzQWemvmFiNRFk2F93m2Kd5tWcFCLu75g&usqp=CAU',
  },
  {
    title: 'Placar / LeaderBoard',
    image: 'https://moema.mg.gov.br/imagens/2037/tabela-com-pontuacao-atualizada-campeonato-futebol_274202217830.jpg',
  }
];
export const ProjectSections = () => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
      {
        sections.map((section, index) => (
          <div key={index} className="flex flex-col items-center gap-6 md:gap-12">
            <h2
              className="text-2xl md:text-3xl font-medium text-green-300"
            >
              {section.title}
            </h2>
            <Image
              src={section.image}
              alt=""
              width={1080}
              height={672}
              className="w-full aspect-auto rounded-lg object-cover"
              unoptimized
            />
          </div>
        ))
      }
    </section>
  )
}