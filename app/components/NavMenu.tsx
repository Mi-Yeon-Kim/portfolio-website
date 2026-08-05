import { profile } from "../Data/data";

export default function NavMenu()
{
    return (
    <nav className="fixed left-0 right-0 mx-auto z-10 top-0 sm:top-4 sm:rounded-full w-screen sm:w-[80%] max-w-[1920px] min-h-10 text-xl py-2 px-3 sm:px-10 bg-primary-700
    flex flex-row self-center justify-between items-center drop-shadow-md drop-shadow-primary-800 outline outline-primary-500">
        <a href="#top" className="bg-primary-400/50 rounded-full size-12 text-center inline-grid place-items-center font-extrabold">{profile.person.initial}</a>
        <span>
            <ul className="flex flex-row gap-4">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </span>
    </nav>
    );
}