import styles from "./SkillCard.module.css";

type Skill = {
    name: string;
    masteryScore: number;
}

type SkillCardProps = {
    skill: Skill;
}

type SkillCardCarouselProps = {
    skills: Skill[];
}

function SkillCard({ skill }: SkillCardProps) {

    return (
        <div className={styles.card_wrapper}>
            <div className={styles.svg_wrapper}>
                <img className={styles.svg_icon}
                    src={`src/assets/SkillsIcons/${skill.name.toLowerCase()}.svg`}
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
            {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
            ))}
        </div>
    );
}

export default SkillCardCarousel;