import styles from "./MenuSelection.module.css";

import type { MenuItem } from "../../types/menu";
import { useState } from "react";
import { Link } from "react-router-dom";

type MenuSelectionProps = {
    MENU_ITEMS: Array<MenuItem>;
}

function MenuSelection({ MENU_ITEMS }: MenuSelectionProps) {
    const [focusedIndex, setFocusedIndex] = useState(0);

    return (
        <div className={styles.menuSelection_wrapper}>
            <div className={styles.menu_wrapper}>
                {MENU_ITEMS.map(({ icon: Icon, label, path }, index) => (
                    <Link
                        to={path}
                        key={path}
                        className={`${styles.menu_item} ${focusedIndex == index ? styles.focused : ""}`}
                        onFocus={() => setFocusedIndex(index)}
                    >
                        <div className={styles.icon_wrapper}>
                            <Icon />
                        </div>
                        <div className={styles.menu_item_label}>{label.toUpperCase()}</div>
                    </Link>
                ))}
            </div>
        </div >
    );
}

export default MenuSelection;