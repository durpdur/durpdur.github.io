import { useEffect, useRef, useState } from "react";
import styles from "./WorkExperience.module.css";
import type { ExperienceData } from "../../types/portfolio_data_types";
import SkillCardCarousel from "../SkillCards/SkillCard";
import KeyHint from "../KeyHint/KeyHint";

type WorkExperienceProps = {
    experiences: ExperienceData[];
    technicalSkills: Record<string, number>;
};

function WorkExperience({ experiences, technicalSkills }: WorkExperienceProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showKeyHint, setShowKeyHint] = useState(true);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        wrapperRef.current?.focus();
    }, []);

    const goPrevious = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === 0 ? experiences.length - 1 : currentIndex - 1
        );
    };

    const goNext = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === experiences.length - 1 ? 0 : currentIndex + 1
        );
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp" ||
            event.key === "ArrowRight" ||
            event.key === "ArrowDown"
        ) {
            setShowKeyHint(false);
            event.preventDefault();
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            goPrevious();
        } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            goNext();
        }
    }

    const experience = experiences[activeIndex];

    return (
        <div ref={wrapperRef} className={styles.wrapper} onKeyDown={handleKeyPress} tabIndex={0}>
            {showKeyHint && <KeyHint />}
            <div
                key={activeIndex}
                className={styles.card}
            >
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
                                src={`/CompanyIcons/${experience.organization
                                    .replace(/\s/g, "")
                                    .toLowerCase()}.jpg`}
                                alt={`${experience.organization} logo`}
                            />
                        </div>
                    </div>

                    <SkillCardCarousel
                        skills={experience.skills.map((skill) => ({
                            name: skill,
                            confidence: technicalSkills[skill] ?? 5,
                        }))}
                    />
                </div>

                <div className={styles.right_main}>
                    {experience.highlights.map((highlight, index) => (
                        <div key={index} className={styles.bulletpoints}>
                            - {highlight}
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className={styles.left_legend}>
                    <div className={styles.legend_main}>{experience.organization}</div>
                    <div className={styles.legend_sub}>{experience.location}</div>
                </div>

                <div className={styles.right_legend}>
                    <div className={styles.legend_main}>{experience.title}</div>
                    <div className={styles.legend_sub}>
                        {experience.startDate} - {experience.endDate}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;