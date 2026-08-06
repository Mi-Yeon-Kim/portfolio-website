import { FaArrowUp } from "react-icons/fa";
import { type Project } from "../Types/Profile";
import Image from "next/image";

export default function Project ({project}: {project: Project})
{
    return (
        <li className="w-full flex flex-row flex-wrap mx-auto my-2 place-items-center justify-center xl:justify-between gap-10 py-10 not-last:border-b-2 border-secondary-300">
            <a 
            href={project.link}
            className="group xl:basis-4/10 min-w-120" >
                <div className="relative border-4 border-primary-300 ">
                    <FaArrowUp className="absolute right-5 top-5 group-hover:-translate-y-3 group-hover:translate-x-3 z-50 text-4xl rotate-45 text-primary-100 shadow-md transition duration-250 ease-in-out"></FaArrowUp>
                    <img
                        src={ project.imageSrc }
                        alt={ project.name + ' cover image' }
                        className="h-90 w-full group-hover:blur-xs transition duration-250 ease-in-out object-cover"
                        />
                </div>
            </a>
            <div className="hidden xl:block h-80 border-l-2 border-secondary-600 self-center place-self-start"></div>
            <div className="w-full xl:basis-4/10 min-w-120 flex flex-col gap-10">
                <span className="text-center xl:text-left text-5xl font-semibold">{project.name}</span>
                <p className="text-justify xl:text-left text-2xl text-gray-400 ">{project.description}</p>
            </div>
        </li>
    );
}