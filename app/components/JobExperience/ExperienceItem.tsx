
import { Job as JobType } from "@/app/Types/Profile";
import JobTag from "./JobTag";
import * as motion from "motion/react-client";
import { Variants, ViewportOptions } from "motion/react";

export default function ExperienceItem({ title, company, timeline, descriptions, tags }: JobType) {
    
    const displayVariants: Variants = {
        hidden: {
            x: 200,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            },
        },
    }
    const viewportOptions: ViewportOptions = {
        once: true,
        amount: 0.1
    }

    return (
        <li className="group relative">
            {/* decorative circle */}
            <div className="absolute float-left left-[7px] w-[2px] h-full group-not-last:bg-secondary-200 
                group-last:bg-gradient-to-b group-last:from-secondary-200 group-last:via-secondary-200/80 
                group-last:via-60% group-last:to-secondary-200/0 group-last:to-80%"></div>
            <div className="absolute float-left rounded-full size-4 bg-primary-800 border-2 border-primary-200"></div>

            <div className="ml-[7px] pl-15 ">
                <motion.div className="relative -top-[38px] shadow-lg/50 shadow-black p-5 my-2 bg-primary-800/10 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    variants={displayVariants}
                    viewport={viewportOptions}
                    >
                    <span className="grid grid-flow-col grid-rows-2 justify-between items-center">
                        <h3 className="text-3xl font-extrabold">{title}</h3>
                        <h4 className="text-2xl font-semibold">{company}</h4>
                        <h5 className="text-2xl font-medium align-middle text-gray-400">{timeline.start} - {timeline.end}</h5>

                    </span>

                    {/* Job description list */}
                    <ul className="pl-15 my-4 list-disc marker:text-primary-500 text-l text-gray-500 font-medium">
                        {descriptions.map((descItem, i) => <li className="m-2" key={i}>{descItem}</li>
                        )}
                    </ul>
                    
                    {/* Job tags */}
                    <ul className="flex flex-row gap-x-4 flex-wrap gap-y-4 font-bold my-8 mx-4">
                        {
                            tags.map((tag: string) => <JobTag content={tag} key={tag}></JobTag>)
                        }
                    </ul>
                </motion.div>
            </div>
        </li>
    );
}
