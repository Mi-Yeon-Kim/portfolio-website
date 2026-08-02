import { profile } from "../Data/data";
import ExperienceList from "./JobExperience/ExperienceList";
import PageSection from "./PageSection";
import SectionTitle from "./SectionTitle";

export default function ExperienceSection()
{
    return (
        <PageSection link={"experience"}>
            <SectionTitle title="Experience"></SectionTitle>
            <div className="my-20 py-5">
                <ExperienceList jobs={profile.jobs}></ExperienceList>
            </div>
        </PageSection>
    );
}