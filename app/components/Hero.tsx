'use client';

import { profile } from "../Data/data";
import PageSection from "./PageSection";
import * as motion from "motion/react-client";
import { AnimatePresence, Transition, Variants, ViewportOptions, stagger } from "motion/react";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Hero()
{
    const nouns = profile.person.nouns;

    const [nounIndex, setNounIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setNounIndex((current) => (current + 1) % nouns.length);
        }, 3000);

        return () => clearInterval(timer);
    });
    
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

    const nounCarouselVariants: Variants = {
        hiddenLower: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
        hiddenUpper: {
            opacity: 0,
            y: -50,
        }
    }

    const carouselTransition: Transition = 
    {
        duration: 0.25
    }

    return (
    <section className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute w-full h-screen overflow-clip">
            <div className="absolute -z-20 right-15 -top-30 bg-primary-400/20 rounded-full size-200 blur-[250px]"></div>
            <div className="absolute -z-20 -left-40 top-130 bg-secondary-400/20 rounded-full size-200 blur-[250px]"></div>
        </div>
        <div className="absolute -z-40 w-full h-screen bg-[url('/pattern.svg')] bg-size-[120px] opacity-80 bg-fixed 
            border-b-4 border-secondary-300"></div>
        <div className="absolute -z-50 w-full h-[240vh] bg-linear-to-b/oklch from-primary-500/30 via-primary-500/10 
            via-70% to-primary-400/0"></div>

        <motion.div variants={animationVariants}
            initial="hidden"
            animate="visible"
            className="container text-center flex flex-col gap-10"
        >
            <motion.p className="text-5xl sm:text-9xl font-medium px-5">I am <span className="inline-block text-8xl 
                sm:text-9xl mt-8">{profile.person.firstName}.</span></motion.p>
            <motion.p className="text-5xl font-extrabold text-gray-500">A</motion.p>
            <AnimatePresence mode="wait">
                <motion.h1
                    key={nounIndex}
                    initial="hiddenLower" animate="visible" exit="hiddenUpper"
                    variants={nounCarouselVariants}
                    transition={carouselTransition}
                    className="text-6xl sm:text-8xl h-45 font-semibold text-transparent bg-clip-text bg-linear-to-b 
                    from-primary-200 to-primary-600 uppercase drop-shadow-md drop-shadow-primary-500"
                >
                    {nouns[nounIndex]}
                </motion.h1>
            </AnimatePresence>
        </motion.div>
        <FaChevronDown className="absolute bottom-28 text-3xl text-secondary-400"></FaChevronDown>
    </section>
    );
}