import { Profile } from "../Types/Profile";

export default function AboutContent({content}: {content: Profile['about']}) {
    return <p className="inline-1/3 text-2xl text-gray-400 font-light">{content.detail}</p>;
}
