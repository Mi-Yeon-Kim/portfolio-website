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
            className="basis-1/3 min-w-120 flex flex-row items-start gap-5"
        >
            <Avatar />
            <div className="grow ml-5 text-5xl font-semibold flex flex-col h-[200px] justify-between">
                <span className="grow-2 text-nowrap">{person.firstName}</span>
                <span className="grow-2">{person.lastName}</span>
                <span className="grow-2 content-end"><ProfileLinks links={links}/></span>
            </div>
        </motion.aside>
    );
}
