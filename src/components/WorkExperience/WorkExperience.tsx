import styles from "./WorkExperience.module.css";
import type { ExperienceData } from "../../types/portfolio_data_types";
import SkillCardCarousel from "../SkillCards/SkillCard";

type WorkExperienceProps = {
    experiences: ExperienceData[];
    technicalSkills: Record<string, number>;
}

function WorkExperience({ experiences, technicalSkills }: WorkExperienceProps) {


    return (
        <div className={styles.wrapper}>
            {experiences.map((experience) => (
                <div className={styles.card}>
                    {/* Title */}
                    <div className={styles.left_title}>
                        <div className={styles.main_title}>COMPANY</div>
                        <div className={styles.subtitle}>
                            <div className={styles.subtitle_label}>CHALLENGE:</div>
                            <div className={styles.subtitle_score}>5.9</div>
                        </div>
                    </div>
                    <div className={styles.right_title}>
                        <div className={styles.main_title}>POSITION</div>
                    </div>

                    {/* Main */}
                    <div className={styles.left_main}>
                        <div className={styles.company_logo_wrapper}>
                            <div className={styles.company_logo_border}>
                                <img
                                    className={styles.company_logo}
                                    src={`/CompanyIcons/${experience.organization.replace(/\s/g, '').toLowerCase()}.jpg`}
                                    alt={`${experience.organization} logo`}
                                />
                            </div>
                        </div>

                        <SkillCardCarousel
                            skills={experience.skills.map((skill) => ({
                                name: skill,
                                confidence: technicalSkills[skill] ?? 5
                            }))}
                        />
                    </div>
                    <div className={styles.right_main}>
                        {experience.highlights.map((highlight) => (
                            <div className={styles.bulletpoints}>- {highlight}</div>
                        ))}
                    </div>


                    {/* Legend */}
                    <div className={styles.left_legend}>
                        <div className={styles.legend_main}>{experience.organization}</div>
                        <div className={styles.legend_sub}>{experience.location}</div>
                    </div>
                    <div className={styles.right_legend}>
                        <div className={styles.legend_main}>{experience.title}</div>
                        <div className={styles.legend_sub}>{experience.startDate} - {experience.endDate}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WorkExperience;