import { useState } from "react";
import styles from "./Lockscreen.module.css"

type LockscreenProps = {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

function Lockscreen({ setAuthenticated }: LockscreenProps) {
    const [password, setPassword] = useState("");

    function validatePassword(userInput: string) {
        const upperInput = userInput.toUpperCase().trim();
        if (upperInput == "KRONOS") {
            setAuthenticated(true);
        }
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        validatePassword(password);
    }

    return (
        <div className={styles.lockscreen_wrapper}>
            <form className={styles.text_wrapper} onSubmit={handleSubmit}>
                <input
                    className={styles.text_input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    aria-label="Password"
                    autoComplete="off"
                />

                <div className={styles.display_text} aria-hidden="true">
                    {password || "PASSWORD"}
                    <span className={styles.cursor}></span>
                </div>
            </form>
        </div>
    );
}

export default Lockscreen;
