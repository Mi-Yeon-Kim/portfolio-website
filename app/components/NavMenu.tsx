import { profile } from "../Data/data";

export default function NavMenu()
{
    return (
        <header className="fixed top-0 sm:top-4 left-0 right-0 mx-auto z-10 sm:rounded-full w-screen sm:w-[90%] 
            max-w-[100rem] min-h-10 text-2xl p-3 sm:px-10 flex flex-row justify-between items-center bg-primary-500/30 
            border-b border-b-primary-300/30 sm:border sm:border-primary-700/60 drop-shadow-lg drop-shadow-primary-950
            sm:inset-ring-1 sm:inset-ring-primary-300/80 backdrop-blur-lg"
        >

            <a href="#top" className="text-3xl font-bold hover:scale-110 transition" >
                <span className="hidden sm:inline ">&lt; {profile.person.firstName} /&gt;</span>
                <img className="sm:hidden size-12 rounded-lg ring-1 ring-primary-400" src="./icon1.png" 
                    alt="icon with link to top of page" />
            </a>

            <span>
                <ul className="flex flex-row gap-4">
                    <li className="relative group">
                        <a href="#about">About
                            <span className="absolute bottom-0 left-0 h-[2px] rounded-full w-full bg-secondary-400 
                                origin-left scale-x-0 group-hover:scale-x-100 transition"/>
                        </a>
                    </li>
                    <li className="relative group">
                        <a href="#experience">Experience
                            <span className="absolute bottom-0 left-0 h-[2px] rounded-full w-full bg-secondary-400 
                                origin-left scale-x-0 group-hover:scale-x-100 transition"/>
                        </a>
                    </li>
                    <li className="relative group">
                        <a href="#projects">Projects
                            <span className="absolute bottom-0 left-0 h-[2px] rounded-full w-full bg-secondary-400 
                                origin-left scale-x-0 group-hover:scale-x-100 transition"/>
                        </a>
                    </li>
                </ul>
            </span>
        </header>
    );
}