import Avatar from "./Avatar";
import ProfileLinks from "./ProfileLinks";
import { Profile } from "../Types/Profile";
import * as motion from "motion/react-client";
import { Variants, ViewportOptions } from "motion";

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
            className="sm:basis-1/3 sm:min-w-120 grid sm:grid-flow-col grid-rows-4 auto-rows-min justify-center sm:grid-rows-2 sm:grid-cols-2 items-start gap-10 sm:gap-5"
        >
            <Avatar />
            <span className="font-semibold text-5xl">{person.firstName} {person.lastName}</span>
            <span className="sm:mt-5 text-5xl flex flex-col justify-between content-end"><ProfileLinks links={links}/></span>
        </motion.aside>
    );
}
