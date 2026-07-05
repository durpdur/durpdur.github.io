import { useState } from "react";
import "./Lockscreen.css";

type LockscreenProps = {
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

function Lockscreen({ setAuthenticated }: LockscreenProps) {
    const [password, setPassword] = useState("");

    function validatePassword(userInput: string) {
        let upperInput = userInput.toUpperCase().trim()
        if (upperInput == "KRONOS") {
            setAuthenticated(true);
        }
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        validatePassword(password);
    }

    return (
        <div id="lockscreen_wrapper">
            <form id="text_wrapper" onSubmit={handleSubmit}>
                <input
                    id="text_input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    aria-label="Password"
                    autoComplete="off"
                />

                <div id="display_text" className="eurostile-demi" aria-hidden="true">
                    {password || "PASSWORD"}
                    <span className="cursor"></span>
                </div>
            </form>
        </div>
    );
}

export default Lockscreen;