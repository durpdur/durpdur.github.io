import styles from "./SkillCard.module.css";

type Skill = {
    name: string;
    confidence: number;
}

type SkillCardProps = {
    skill: Skill;
    cardIndex: number;
}

type SkillCardCarouselProps = {
    skills: Skill[];
}

function SkillCard({ skill, cardIndex }: SkillCardProps) {

    return (
        <div className={styles.card_wrapper}
            style={{ "--delay": `${cardIndex * 100}ms` } as React.CSSProperties}
        >
            <div className={styles.svg_wrapper}>
                <img className={styles.svg_icon}
                    src={`/SkillsIcons/${skill.name.replace(/\s/g, '').toLowerCase()}.svg`}
                    alt={skill.name}
                />
            </div>
            <div className={styles.legend_wrapper}>
                <div className={styles.legend}>{skill.name.toUpperCase()}</div>

                <div className={styles.masteryBar}>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            style={{ "--masteryBar-delay": `${cardIndex * 100 + index * 100 + 400}ms`, } as React.CSSProperties}
                            className={`${styles.masterySegment} 
                                ${index < skill.confidence ? styles.filled : ""}`}
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
                    cardIndex={index}
                />
            ))}
        </div>
    );
}

export default SkillCardCarousel;