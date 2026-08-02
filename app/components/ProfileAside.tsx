import Avatar from "./Avatar";
import ProfileLinks from "./ProfileLinks";
import { Profile } from "../Types/Profile";


export default function ProfileAside({person, links}: { person: Profile["person"], links: Profile["links"] }) {
    return (
        <aside className="inline-1/3 flex flex-row items-start gap-5">
            <Avatar />
            <div className="grow ml-5 text-5xl font-semibold flex flex-col h-[200px] justify-between">
                <span className="grow-2">{person.firstName}</span>
                <span className="grow-2">{person.lastName}</span>
                <span className="grow-2 content-end"><ProfileLinks links={links}/></span>
            </div>
        </aside>
    );
}
