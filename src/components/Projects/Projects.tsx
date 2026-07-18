import { useEffect, useRef, useState } from "react";
import type { ProjectData } from "../../types/portfolio_data_types";
import SkillCardCarousel from "../SkillCards/SkillCard";

import styles from "./Projects.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';

type ProjectsProps = {
    projects: ProjectData[];
    technicalSkills: Record<string, number>;
}

function Projects({ projects, technicalSkills }: ProjectsProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        wrapperRef.current?.focus();
    }, []);

    const goPrevious = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === 0 ? projects.length - 1 : currentIndex - 1
        );
    };

    const goNext = () => {
        setActiveIndex((currentIndex) =>
            currentIndex === projects.length - 1 ? 0 : currentIndex + 1
        );
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp" ||
            event.key === "ArrowRight" ||
            event.key === "ArrowDown"
        ) {
            event.preventDefault();
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
            goPrevious();
        } else if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            goNext();
        }
    }

    const project = projects[activeIndex];

    return (
        <div ref={wrapperRef} className={styles.wrapper} onKeyDown={handleKeyPress} tabIndex={0}>
            <div
                key={activeIndex}
                className={styles.project_wrapper}
            >
                <div></div>
                <div className={styles.project_header}></div>
                <div></div>

                <div className={styles.project_main_left}></div>
                <div className={styles.project_main}>
                    <div className={styles.title_wrapper}>
                        <div className={styles.title}>{project.name.toUpperCase()}</div>

                        <div className={styles.legend}>
                            <div className={styles.legend_title}>{project.subtitle.toUpperCase()}</div>
                            <div className={styles.legend_content}>{project.date}</div>
                            {project.awards && <div className={styles.awards}>{project.awards}</div>}
                        </div>

                    </div>


                    <div
                        className={styles.link}
                        onClick={() => window.open(project.link)}
                    >
                        <GitHubIcon />
                    </div>

                    <div className={styles.highlight_wrapper}>{project.highlights.map((highlight) => (
                        <div className={styles.highlight_text}>- {highlight}</div>
                    ))}</div>

                    <div><SkillCardCarousel skills={project.technologies.map((skill) => ({
                        name: skill,
                        confidence: technicalSkills[skill] ?? 5,
                    }))} /></div>
                </div>
                <div className={styles.project_main_right}></div>

                <div></div>
                <div className={styles.project_footer}></div>
                <div></div>
            </div>
        </div>
    );
}

export default Projects;