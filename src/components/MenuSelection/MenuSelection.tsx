import styles from "./MenuSelection.module.css";

import type { MenuItem } from "../../types/menu_types";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

type MenuSelectionProps = {
    MENU_ITEMS: Array<MenuItem>;
}

function MenuSelection({ MENU_ITEMS }: MenuSelectionProps) {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

    const focusItem = (index: number) => {
        setFocusedIndex(index);
        itemRefs.current[index]?.focus();
    };

    const goPrevious = () => {
        const previousIndex =
            focusedIndex === 0 ? MENU_ITEMS.length - 1 : focusedIndex - 1;

        focusItem(previousIndex);
    };

    const goNext = () => {
        const nextIndex =
            focusedIndex === MENU_ITEMS.length - 1 ? 0 : focusedIndex + 1;

        focusItem(nextIndex);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === "ArrowUp") {
            event.preventDefault();
            goPrevious();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            goNext();
        }
    }

    return (
        <div className={styles.menuSelection_wrapper} >
            <div className={styles.menu_wrapper} onKeyDown={handleKeyPress} tabIndex={0}>
                {MENU_ITEMS.map(({ icon: Icon, label, path }, index) => (
                    <Link
                        to={path}
                        key={path}
                        ref={(element) => {
                            itemRefs.current[index] = element;
                        }}
                        className={`${styles.menu_item} ${focusedIndex == index ? styles.focused : ""}`}
                        onFocus={() => setFocusedIndex(index)}
                        onMouseEnter={() => setFocusedIndex(index)}
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