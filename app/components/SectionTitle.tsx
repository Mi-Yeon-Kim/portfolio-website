export default function SectionTitle({title}: {title: string})
{
    return (
        <h2 className= "text-6xl font-extrabold text-center mt-10 mb-20 uppercase text-secondary-200 drop-shadow-md drop-shadow-secondary-700">{title}</h2>
    );
}