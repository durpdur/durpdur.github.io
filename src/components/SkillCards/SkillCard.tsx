import styles from "./SkillCard.module.css";

type Skill = {
    name: string;
    masteryScore: number;
}

type SkillCardProps = {
    skill: Skill;
    index: number;
}

type SkillCardCarouselProps = {
    skills: Skill[];
}

function SkillCard({ skill, index }: SkillCardProps) {

    return (
        <div className={styles.card_wrapper}
            style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}
        >
            <div className={styles.svg_wrapper}>
                <img className={styles.svg_icon}
                    src={`/SkillsIcons/${skill.name.trim().toLowerCase()}.svg`}
                    alt={skill.name}
                />
            </div>
            <div className={styles.legend_wrapper}>
                <div className={styles.legend}>{skill.name.toUpperCase()}</div>

                <div className={styles.masteryBar}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.masterySegment} 
                                ${index < skill.masteryScore ? styles.filled : ""}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SkillCardCarousel({ skills }: SkillCardCarouselProps) {
    return (
        <div className={styles.carousel_wrapper}>
            {skills.map((skill, index) => (
                <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                />
            ))}
        </div>
    );
}

export default SkillCardCarousel;