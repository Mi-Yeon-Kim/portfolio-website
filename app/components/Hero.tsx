import { profile } from "../Data/data";
import PageSection from "./PageSection";

export default function Hero({content} : {content: string})
{
    return (
    <section className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute right-15 -top-30 bg-primary-400/10 rounded-full size-200 blur-[100px]"></div>
        <div className="absolute -left-40 top-130 bg-blue-400/5 rounded-full size-200 blur-[100px]"></div>
        <div className="absolute w-full h-[230vh] bg-linear-to-b/oklch from-primary-400/20 to-primary-400/0"></div>

        <div className="container text-center flex flex-col gap-8">
            <p className="text-9xl font-medium">I am {profile.person.firstName}.</p>
            <p className="text-5xl font-extrabold text-gray-400">A</p>
            <h1 className="text-8xl font-semibold text-transparent 
            bg-clip-text bg-linear-to-b from-primary-200 to-primary-600 uppercase
            drop-shadow-md drop-shadow-primary-500

            animate-fade-in
            ">{content}</h1>
            
        </div>
    </section>
    );
}