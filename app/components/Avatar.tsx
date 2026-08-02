import Image from "next/image";
import { profile } from "../Data/data";


export default function Avatar() {
    return (
        <Image
            src='/profile_pic.jpg'
            alt={ profile.person.firstName + ' ' + profile.person.lastName }
            width={200}
            height={200}
            className="rounded-full outline-4 outline-offset-4 outline-primary-300"/>
    );
}
