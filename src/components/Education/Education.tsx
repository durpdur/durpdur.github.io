import styles from "./Education.module.css";
import type { EducationData } from "../../types/portfolio_data_types.ts";
import { useEffect, useState } from "react";

type EducationProps = {
    education: EducationData;
}

type CountdownTime = {
    months: number;
    days: number;
    seconds: number;
};

function getCountdownTime(targetDate: string): CountdownTime {
    const target = new Date(targetDate).getTime();
    const now = Date.now();

    const diffMs = Math.max(0, target - now);
    const totalSeconds = Math.floor(diffMs / 1000);

    return {
        months: Math.floor(totalSeconds / (30.44 * 24 * 60 * 60)),
        days: Math.floor((totalSeconds % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60)),
        seconds: totalSeconds % 60
    };
}

function pad(value: number): string {
    return String(value).padStart(2, "0");
}


function Education({ education }: EducationProps) {
    const [countdown, setCountdown] = useState(() =>
        getCountdownTime(education.endDate)
    );

    useEffect(() => {
        const interval = window.setInterval(() => {
            setCountdown(getCountdownTime(education.endDate));
        }, 1000);

        return () => window.clearInterval(interval);
    }, [education.endDate]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>{education.institution.toUpperCase()}</div>
            <div className={styles.subtitle}>{education.degree.toUpperCase()}</div>

            <div className={styles.countdown_wrapper}>
                <div className={styles.countdown_grid}>
                    <div className={styles.countdown_number}>{pad(countdown.months)}</div>
                    <div className={styles.countdown_separator}>:</div>
                    <div className={styles.countdown_number}>{pad(countdown.days)}</div>
                    <div className={styles.countdown_separator}>:</div>
                    <div className={styles.countdown_number}>{pad(countdown.seconds)}</div>

                    <div className={styles.countdown_legend}>MONTHS</div>
                    <div></div>
                    <div className={styles.countdown_legend}>DAYS</div>
                    <div></div>
                    <div className={styles.countdown_legend}>SECONDS</div>
                </div>
            </div>
            <div className={styles.title}>UNTIL GRADUATION</div>
        </div>
    );
}

export default Education;