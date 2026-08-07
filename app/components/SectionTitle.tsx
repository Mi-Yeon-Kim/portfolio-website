export default function SectionTitle({title}: {title: string})
{
    return (
        <h2 className= "text-6xl font-extrabold text-center mt-10 mb-20 uppercase text-secondary-400 text-shadow-[0_0_8px] text-shadow-secondary-700">{title}</h2>
    );
}