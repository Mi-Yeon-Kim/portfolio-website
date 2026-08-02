import { profile } from "../Data/data";

export default function NavMenu()
{
    return (
    <nav className="sticky z-10 top-4 rounded-full w-8/10 min-h-10 text-xl py-2 px-10 bg-primary-700 
    flex flex-row justify-between items-center drop-shadow-md drop-shadow-primary-800 outline outline-primary-500">
        <a href="#top" className="bg-primary-400/50 rounded-full size-12 text-center inline-grid place-items-center font-extrabold">{profile.person.initial}</a>
        <span>
            <ul className="flex flex-row gap-4">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#proejcts">Projects</a></li>
            </ul>
        </span>
    </nav>
    );
}