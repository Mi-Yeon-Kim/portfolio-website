import { profile } from "../Data/data";
import ExperienceList from "./JobExperience/ExperienceList";
import PageSection from "./PageSection";
import SectionTitle from "./SectionTitle";

export default function ExperienceSection()
{
    return (
        <PageSection link={"experience"}>
            <SectionTitle title="Experience"></SectionTitle>
            <div className="py-5 mx-10">
                <ExperienceList jobs={profile.jobs}></ExperienceList>
            </div>
        </PageSection>
    );
}