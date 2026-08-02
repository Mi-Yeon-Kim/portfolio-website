export default function JobTag({content}: {content: string})
{
    return (
    <li>
        <p className="rounded-full px-4 bg-primary-600 border-2 border-primary-400 text-center">
            {content}
        </p>
    </li>
    );
}