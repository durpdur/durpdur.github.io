import { Link } from "react-router-dom";
import styles from "./HomeButton.module.css";
import HomeIcon from "@mui/icons-material/Home";

type HomeButtonProps = {
    className?: string;
    label?: string;
    placement?: "bottomLeft" | "bottomRight" | "inline";
    to?: string;
    tone?: "dark" | "light";
};

function HomeButton({
    className = "",
    label = "Go home",
    placement = "bottomRight",
    to = "/",
    tone = "light",
}: HomeButtonProps) {
    const classNames = [
        styles.home_button,
        styles[placement],
        styles[tone],
        className,
    ].filter(Boolean).join(" ");

    return (
        <Link aria-label={label}
            className={classNames}
            title={label}
            to={to}>
            <HomeIcon className={styles.icon_svg} />
        </Link>
    );
}

export default HomeButton;
