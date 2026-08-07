import { ReactNode } from "react";
import { Profile } from "../Types/Profile";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileDownload } from "react-icons/fa";


export function ProfileLink({children, profile}: {children: ReactNode, profile: string})
{
    return (
        <li className="group hover:scale-130 transition">
            <a className=""href={profile} >
                {children}
            </a>
        </li>
    );
}

export default function ProfileLinks({links}: {links: Profile['links']}) {

    return (
        <ul className="flex flex-row justify-evenly ">
            <ProfileLink profile={'https://github.com/' + links.github}>
                <div className="size-13 rounded-full border-primary-300 border-4 sm:border-2 inline-grid text-center place-items-center">
                    <FaGithub className="fill-white size-6 group-hover:scale-130 group-hover:fill-secondary-300 transition"/>
                </div>
                <div className="text-base sm:text-sm text-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition">github</div>
            </ProfileLink>

            <ProfileLink profile={'https://linkedin.com/in/' + links.linkedin}>
                <div className="size-13 rounded-full border-primary-300 border-4 sm:border-2 inline-grid text-center place-items-center">
                    <FaLinkedinIn className="fill-white size-6 group-hover:scale-130 group-hover:fill-secondary-300 transition"/>
                </div>
                <div className="text-base sm:text-sm text-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition">linkedin</div>
            </ProfileLink>

            <ProfileLink profile={'mailto:' + links.email}>
                <div className="size-13 rounded-full border-primary-300 border-4 sm:border-2 inline-grid text-center place-items-center">
                    <FaEnvelope className="fill-white size-6 group-hover:scale-130 group-hover:fill-secondary-300 transition"/>
                </div>
                <div className="text-base sm:text-sm text-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition">email</div>
            </ProfileLink>

            <ProfileLink profile={links.resume}>
                <div className="size-13 rounded-full border-primary-300 border-4 sm:border-2 inline-grid text-center place-items-center">
                    <FaFileDownload className="fill-white size-6 group-hover:scale-130 group-hover:fill-secondary-300 transition"/>
                </div>
                <div className="text-base sm:text-sm text-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition">resume</div>
            </ProfileLink>
        </ul>
    );
}

