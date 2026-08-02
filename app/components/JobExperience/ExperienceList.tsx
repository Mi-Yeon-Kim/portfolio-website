import { Job as JobType} from "~/Types/Profile";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceList({jobs}: {jobs: JobType[]})
{
    return (
        <ul className="flex flex-col justify-between">
            { jobs.map( job =>
                <ExperienceItem {...job} key={job.company}></ExperienceItem>
            ) }
        </ul>
    );
}