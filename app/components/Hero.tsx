import PageSection from "./PageSection";

export default function Hero({content} : {content: string})
{
    return (
    <>
    <div className="absolute right-15 -top-30 bg-primary-400/10 rounded-full size-200 blur-[100px]"></div>
    <div className="absolute -left-40 top-130 bg-blue-400/5 rounded-full size-200 blur-[100px]"></div>
    <div className="absolute w-full h-[200vh] bg-linear-to-b/oklch from-primary-400/10 to-primary-400/0"></div>
    <PageSection link="">
        <h1 className="pt-16 text-9xl text-center font-semibold text-transparent 
        bg-clip-text bg-linear-to-b from-primary-200 to-primary-600 uppercase
        drop-shadow-md drop-shadow-primary-500

        animate-fade-in
        ">{content}</h1>
    </PageSection>
    </>
    );
}