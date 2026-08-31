import { Outlet, useLocation } from "react-router-dom";
import type { CSSProperties } from "react";
import styles from "./ScreenFrame.module.css";

type ScreenLayout = {
    columns: string;
    rows: string;
    screen: string;
};

const layouts: Record<string, ScreenLayout> = {
    "/": {
        columns: "1fr",
        rows: "4fr 2fr 4fr",
        screen: "menu",
    },
    "/info": {
        columns: "1fr 1fr",
        rows: "1fr 5fr 1fr",
        screen: "split",
    },
    "/education": {
        columns: "1fr",
        rows: "1fr 3fr 1fr",
        screen: "education",
    },
    "/work": {
        columns: "1fr 1fr",
        rows: "1fr 3fr 1fr",
        screen: "split",
    },
    "/projects": {
        columns: "1fr 3fr 1fr",
        rows: "1fr 10fr 1fr",
        screen: "projects",
    },
    "/contact": {
        columns: "3fr 2fr",
        rows: "1fr 8fr 1fr",
        screen: "contact",
    },
};

function ScreenFrame() {
    const location = useLocation();
    const layout = layouts[location.pathname] ?? layouts["/"];

    return (
        <div
            className={styles.frame}
            data-screen={layout.screen}
            style={{
                "--screen-columns": layout.columns,
                "--screen-rows": layout.rows,
            } as CSSProperties}
        >
            <Outlet />
        </div>
    );
}

export default ScreenFrame;
