import styles from "./Education.module.css";

function Education() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>SAN JOSE STATE UNIVERSITY</div>
            <div className={styles.countdown_wrapper}>
                <div className={styles.countdown_grid}>
                    <div className={styles.countdown_number}>08</div>
                    <div className={styles.countdown_separator}>:</div>
                    <div className={styles.countdown_number}>10</div>
                    <div className={styles.countdown_separator}>:</div>
                    <div className={styles.countdown_number}>42</div>

                    <div className={styles.countdown_legend}>HOURS</div>
                    <div></div>
                    <div className={styles.countdown_legend}>MINUTES</div>
                    <div></div>
                    <div className={styles.countdown_legend}>SECONDS</div>
                </div>
            </div>
            <div className={styles.title}>UNTIL GRADUATION</div>
        </div>
    );
}

export default Education;