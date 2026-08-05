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
            <div className="min-w-full flex flex-row flex-wrap justify-evenly py-5 gap-15 lg:gap-0 text-justify lg:text-left">
                <ProfileAside person={profile.person} links={profile.links}></ProfileAside>
                <AboutContent content={profile.about}></AboutContent>
            </div>
        </PageSection>
    )
}

