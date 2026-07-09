import styles from "./WorkExperience.module.css";
import type { ExperienceData } from "../../types/portfolio_data_types";
import SkillCard from "../SkillCards/SkillCard";

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
                    <div className={styles.left_main}></div>
                    <div className={styles.right_main}>
                        <div className={styles.bulletpoints}>Highlights</div>
                        {experience.highlights.map((highlight) => (
                            <div className={styles.bulletpoints}>- {highlight}</div>
                        ))}

                        <SkillCard skill={"react"} />
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