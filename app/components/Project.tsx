import { FaArrowUp } from "react-icons/fa";
import { type Project } from "../Types/Profile";
import Image from "next/image";

export default function Project ({project}: {project: Project})
{
    return (
        <li className="grid grid-cols-[1fr_80px_1fr] grid-rows-3 mx-auto h-80 my-2 place-items-center gap-x-10">
            <a 
            href={project.link}
            className="relative outline-4 outline-primary-300 row-span-3 group " >
                <FaArrowUp className="absolute right-5 top-5 group-hover:-translate-y-3 group-hover:translate-x-3 z-50 text-4xl rotate-45 text-primary-100 shadow-md transition duration-250 ease-in-out"></FaArrowUp>
                <img
                    src={ project.imageSrc }
                    alt={ project.name + ' cover image' }
                    className="h-80 row-span-3 group-hover:blur-xs transition duration-250 ease-in-out"
                    />
                
            </a>
            <div className="row-span-3 h-[80%] border-l-2 border-secondary-600 self-center place-self-start"></div>
            <div className="row-span-3 flex flex-col gap-10">
                <span className="text-5xl font-semibold">{project.name}</span>
                <p className="text-2xl text-gray-400 ">{project.description}</p>
            </div>
        </li>
    );
}