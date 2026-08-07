import Image from "next/image";
import ProfileLinks from "./ProfileLinks";
import { Profile } from "../Types/Profile";
import * as motion from "motion/react-client";
import { Variants, ViewportOptions } from "motion";
import { profile } from "../Data/data";

export default function ProfileAside({person, links}: { person: Profile["person"], links: Profile["links"] }) {

    const slideFadeInLeftToRight: Variants = {
        hidden:
        {
            opacity: 0,
            x: -100
        },
        visible:
        {
            opacity: 1,
            x: 0,
            transition:
            {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const viewportOptions: ViewportOptions = {
        once: true,
        amount: 0.4
    };

    return (
        <motion.aside 
            initial="hidden"
            whileInView="visible"
            variants={slideFadeInLeftToRight}
            viewport={viewportOptions}
            className="sm:basis-1/3 sm:min-w-150 grid sm:grid-flow-col grid-rows-3 auto-rows-min justify-center sm:grid-rows-2 sm:grid-cols-2 items-start gap-10 sm:gap-0"
        >
            <Image
                src='./profile_pic.jpg'
                alt={ profile.person.firstName + ' ' + profile.person.lastName }
                width={250}
                height={250}
                className="sm:mr-20 rounded-full outline-4 outline-offset-6 outline-primary-500 mx-auto row-span-3"/>

            <span className="text-center sm:text-right">
                <div className="font-semibold text-5xl">{person.firstName} {person.lastName}</div>
                <div className="text-3xl text-gray-500">{person.pronouns}</div>
            </span>
            <span className="text-5xl flex flex-col justify-between w-100 sm:w-auto"><ProfileLinks links={links}/></span>
        </motion.aside>
    );
}
