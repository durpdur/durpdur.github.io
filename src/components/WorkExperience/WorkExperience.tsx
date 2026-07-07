import type { ExperienceData } from "../../types/portfolio_data_types";

type WorkExperienceProps = {
    experiences: ExperienceData[];
}

function WorkExperience({ experiences }: WorkExperienceProps) {
    return (
        <div>
            {experiences.map((experience) => (
                <div>{experience.title}</div>
            ))}
        </div>
    );
}

export default WorkExperience;