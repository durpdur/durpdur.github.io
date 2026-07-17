import type { ProjectData } from "../../types/portfolio_data_types";
import SkillCardCarousel from "../SkillCards/SkillCard";

import styles from "./Projects.module.css";

type ProjectsProps = {
    projects: ProjectData[];
    technicalSkills: Record<string, number>;
}

function Projects({ projects, technicalSkills }: ProjectsProps) {
    return (
        <div className={styles.wrapper}>
            {projects.map((project) => (
                <div className={styles.project_wrapper}>
                    <div></div>
                    <div className={styles.project_header}></div>
                    <div></div>

                    <div className={styles.project_main_left}></div>
                    <div className={styles.project_main}>
                        <div className={styles.title_wrapper}>
                            <div className={styles.title}>{project.name.toUpperCase()}</div>
                            <div className={styles.legend}>{project.subtitle}</div>
                        </div>

                        <div>{project.date}</div>
                        <div>{project.link}</div>
                        <div><SkillCardCarousel skills={project.technologies.map((skill) => ({
                            name: skill,
                            confidence: technicalSkills[skill] ?? 5,
                        }))} /></div>
                        <div>{project.highlights.map((highlight) => (
                            <div>{highlight}</div>
                        ))}</div>
                    </div>
                    <div className={styles.project_main_right}></div>

                    <div></div>
                    <div className={styles.project_footer}></div>
                    <div></div>
                </div>
            ))}
        </div>
    );
}

export default Projects;