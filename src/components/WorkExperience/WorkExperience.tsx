import styles from "./WorkExperience.module.css";
import type { ExperienceData } from "../../types/portfolio_data_types";
import SkillCardCarousel from "../SkillCards/SkillCard";

type WorkExperienceProps = {
    experiences: ExperienceData[];
}

function WorkExperience({ experiences }: WorkExperienceProps) {
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
                            skills={[
                                { name: "Python", masteryScore: 1 },
                                { name: "Java", masteryScore: 4 },
                                { name: "C++", masteryScore: 3 },
                                { name: "TypeScript", masteryScore: 5 },
                                { name: "SQL", masteryScore: 2 },
                                { name: "HTML", masteryScore: 4 },
                                { name: "CSS", masteryScore: 3 },
                            ]}
                        />
                    </div>
                    <div className={styles.right_main}>
                        <div className={styles.bulletpoints}>Highlights</div>
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