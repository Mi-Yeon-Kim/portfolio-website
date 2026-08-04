import { Profile } from "../Types/Profile";
import * as motion from "motion/react-client";
import { Variants, ViewportOptions } from "motion";

export default function AboutContent({content}: {content: Profile['about']}) {
    const slideFadeInRightToLeft: Variants = {
        hidden:
        {
            opacity: 0,
            x: 100
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
        <motion.p 
            initial="hidden"
            whileInView="visible"
            variants={slideFadeInRightToLeft}
            viewport={viewportOptions}
            className="inline-1/3 text-2xl text-gray-400 font-light"
        >{content.detail}</motion.p>
    );
}
