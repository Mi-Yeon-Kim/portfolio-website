export default function JobTag({content}: {content: string})
{
    return (
    <li>
        <p className="rounded-full px-4 bg-secondary-600 border-2 border-secondary-200 text-center hover:scale-110 drop-shadow-md hover:drop-shadow-lg drop-shadow-secondary-900 hover:drop-shadow-secondary-800 transition">
            {content}
        </p>
    </li>
    );
}