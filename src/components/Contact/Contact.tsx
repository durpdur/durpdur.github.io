import styles from "./Contact.module.css";

import type { PersonalData } from "../../types/portfolio_data_types";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

type ContactProps = {
    personal: PersonalData;
}

function Contact({ personal }: ContactProps) {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}></div>
            <div className={styles.header}></div>


            {/* MAIN LEFT */}
            <div className={styles.main_left}>
                <div className={styles.main_text_wrapper}>
                    <div className={styles.main_text_left}>GET IN</div>
                    <div className={styles.main_text_right}>TOUCH</div>
                </div>

                <div className={`${styles.sub_text} ${styles.contact_button}`}>
                    <a href={`mailto:${personal.email}`}>{personal.email}</a>
                </div>
            </div>

            {/* MAIN RIGHT */}
            <div className={styles.main_right}>
                <div className={styles.text_body}>
                    Genuinely just come chat! I'm always down to talk about tech, cooking, or anything on your mind.
                </div>
                <div>
                    <div className={styles.text_body}>Contact me:</div>
                    <div className={styles.contact_buttons_wrapper}>
                        <div className={styles.contact_button} onClick={() => navigator.clipboard.writeText(personal.phone)}><PhoneIcon /></div>
                        <div className={styles.contact_button} onClick={() => navigator.clipboard.writeText(personal.email)}><EmailIcon /></div>
                        <div className={styles.contact_button} onClick={() => window.open(personal.linkedin)}><LinkedInIcon /></div>
                        <div className={styles.contact_button} onClick={() => window.open(personal.repo)}><GitHubIcon /></div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}></div>
            <div className={styles.footer}></div>
        </div>
    );
}

export default Contact;
