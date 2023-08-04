import Image from "next/image"
import frontendExample from "../../../../../../public/images/front-example.png"
export const ProjectCard = () => {
  return (
    <div className="rounded-lg 'h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          src={frontendExample}
          alt="Frontend-example"
          width={380}
          height={200}
          unoptimized
          className=" w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50;90 group-hover:text-emerald-500 transition-all">Trybe Futebol Clube</strong>
        <p className="mt-2 text-gray-400 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti, ipsa ad nemo voluptate molestiae, delectus animi eaque natus, eligendi dolorum temporibus repellat soluta obcaecati ducimus nesciunt exercitationem sit inventore perspiciatis dolores laudantium at. Magni ullam dolorem voluptas vel a pariatur quos nam! Architecto ducimus consectetur nulla ad laboriosam assumenda tenetur minus voluptate quasi mollitia ipsa dolorum soluta at blanditiis natus excepturi facilis amet ut magni autem optio, placeat officiis nihil in! Voluptates libero ex recusandae quis cupiditate. Unde, optio consequatur. Quo quidem culpa dolorem, delectus magni dolorum ea provident, veniam sit sint cumque! Excepturi itaque ut blanditiis temporibus praesentium.</p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">React, ContextAPI, Express, Typescript, Sequelize, MySQL</span>
      </div>
    </div>
  )
}