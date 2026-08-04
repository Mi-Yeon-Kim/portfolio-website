'use client';

import { profile } from "../Data/data";
import PageSection from "./PageSection";
import * as motion from "motion/react-client";
import { AnimatePresence, Transition, Variants, ViewportOptions, stagger } from "motion/react";
import { useEffect, useState } from "react";

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
            <div className="relative flex h-35 items-center justify-center ">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={nounIndex}
                        initial="hiddenLower" animate="visible" exit="hiddenUpper"
                        variants={nounCarouselVariants}
                        transition={carouselTransition}
                        className="absolute text-8xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-primary-200 to-primary-600 uppercase drop-shadow-md drop-shadow-primary-500"
                    >
                        {nouns[nounIndex]}
                    </motion.h1>
                </AnimatePresence>
            </div>
        </motion.div>
    </section>
    );
}