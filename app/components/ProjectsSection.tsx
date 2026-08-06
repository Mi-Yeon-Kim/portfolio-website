import { profile } from "../Data/data";
import PageSection from "./PageSection";
import SectionTitle from "./SectionTitle";
import Project from "./Project";

export default function ProjectsSection ()
{
    return (
        <PageSection link={"projects"}>
            <SectionTitle title="Projects"></SectionTitle>
            
            <ul className="flex flex-col mx-10">
                {
                    profile.projects.map(project =>
                        <Project key={project.name} project={project}></Project>
                    )
                }
            </ul>
        </PageSection>
    );
}