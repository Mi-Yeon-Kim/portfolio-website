import PageSection from "./PageSection";
import AboutContent from "./AboutContent";
import ProfileAside from "./ProfileAside";
import SectionTitle from "./SectionTitle";
import { profile } from "../Data/data";

export default function AboutSection()
{
    return (
        <PageSection link={"about"}>
            <SectionTitle title="About"></SectionTitle>
            <div className="min-w-full flex flex-row justify-evenly my-20 py-5">
                <ProfileAside person={profile.person} links={profile.links}></ProfileAside>
                <AboutContent content={profile.about}></AboutContent>
            </div>
        </PageSection>
    )
}

