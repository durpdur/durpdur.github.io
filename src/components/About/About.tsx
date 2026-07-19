import type { EducationData, PersonalData } from "../../types/portfolio_data_types";
import styles from "./About.module.css";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

type AboutProps = {
    personal: PersonalData;
    education: EducationData;
}

function About({ personal }: AboutProps) {
    return (
        <div className={styles.wrapper}>

            <div className={styles.header_left}></div>
            <div className={styles.header_right}></div>

            <div className={styles.main_left}>
                <img src="/about_pic.jpg" alt="about_pic" />
            </div>
            <div className={styles.main_right}>
                <div className={styles.title}>{personal.name.toUpperCase()}</div>
                <div className={styles.subtitle}>
                    LOCATION:
                    <div className={styles.location_chip}>{personal.location}</div>
                </div>

                <div className={styles.body}>
                    {personal.fun_facts.map((fact) => (
                        <div>{fact}</div>
                    ))}
                </div>

                <div className={styles.contact_buttons_wrapper}>
                    <div className={styles.contact_button} onClick={() => navigator.clipboard.writeText(personal.phone)}><PhoneIcon /></div>
                    <div className={styles.contact_button} onClick={() => navigator.clipboard.writeText(personal.email)}><EmailIcon /></div>
                    <div className={styles.contact_button} onClick={() => window.open(personal.linkedin)}><LinkedInIcon /></div>
                    <div className={styles.contact_button} onClick={() => window.open(personal.repo)}><GitHubIcon /></div>
                </div>
            </div>

            <div className={styles.footer_left}></div>
            <div className={styles.footer_right}></div>

        </div>
    );
}

export default About;