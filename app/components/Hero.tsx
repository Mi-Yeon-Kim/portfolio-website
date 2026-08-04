import { profile } from "../Data/data";
import PageSection from "./PageSection";
import * as motion from "motion/react-client";
import { Variants, ViewportOptions, stagger } from "motion/react";

export default function Hero({content} : {content: string})
{
    const animationVariants: Variants= {
        hidden:
        {
            opacity: 0,
            y: 100
        },
        visible:
        {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            },   
        }
    }
    return (
    <section className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute -z-50 right-15 -top-30 bg-primary-400/10 rounded-full size-200 blur-[100px]"></div>
        <div className="absolute -z-50 -left-40 top-130 bg-blue-400/5 rounded-full size-200 blur-[100px]"></div>
        <div className="absolute -z-50 w-full h-[230vh] bg-linear-to-b/oklch from-primary-400/20 to-primary-400/0"></div>

        <motion.div variants={animationVariants}
            initial="hidden"
            animate="visible"
            className="container text-center flex flex-col gap-8"
        >
            <motion.p className="text-9xl font-medium">I am {profile.person.firstName}.</motion.p>
            <motion.p className="text-5xl font-extrabold text-gray-400">A</motion.p>
            <motion.h1 className="text-8xl font-semibold text-transparent 
                bg-clip-text bg-linear-to-b from-primary-200 to-primary-600 uppercase
                drop-shadow-md drop-shadow-primary-500
                animate-fade-in"
            >
                {content}
            </motion.h1>
            
        </motion.div>
    </section>
    );
}