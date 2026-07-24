import { useEffect, useState } from "react";
import styles from "./Lockscreen.module.css";

type LockscreenProps = {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AUTOMATIC_PASSWORD = "IAN DU";

function Lockscreen({ setAuthenticated }: LockscreenProps) {
    const [password, setPassword] = useState("");

    function validatePassword(userInput: string) {
        const upperInput = userInput.toUpperCase().trim();

        if (upperInput === AUTOMATIC_PASSWORD) {
            setAuthenticated(true);
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        validatePassword(password);
    }

    useEffect(() => {
        let characterIndex = 0;
        let typingInterval: number;
        let submitTimeout: number;

        const startTimeout = window.setTimeout(() => {
            typingInterval = window.setInterval(() => {
                characterIndex += 1;

                const typedPassword = AUTOMATIC_PASSWORD.slice(
                    0,
                    characterIndex
                );

                setPassword(typedPassword);

                if (characterIndex === AUTOMATIC_PASSWORD.length) {
                    window.clearInterval(typingInterval);

                    // Simulate pressing Enter after the last character.
                    submitTimeout = window.setTimeout(() => {
                        validatePassword(typedPassword);
                    }, 1000);
                }
            }, 200);
        }, 1000);

        return () => {
            window.clearTimeout(startTimeout);
            window.clearTimeout(submitTimeout);
            window.clearInterval(typingInterval);
        };
    }, []);

    return (
        <div className={styles.lockscreen_wrapper}>
            <form className={styles.text_wrapper} onSubmit={handleSubmit}>
                <input
                    className={styles.text_input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
                    autoComplete="off"
                />

                <div className={styles.display_text}>
                    {password || "PASSWORD"}
                    <span className={styles.cursor} />
                </div>
            </form>
        </div>
    );
}

export default Lockscreen;