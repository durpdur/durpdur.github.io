import styles from "./MenuSelection.module.css";

import type { MenuItem } from "../../types/menu";
// import { useState } from "react";

type MenuSelectionProps = {
    MENU_ITEMS: Array<MenuItem>;
}

function MenuSelection({ MENU_ITEMS }: MenuSelectionProps) {
    // const [selected, setSelected] = useState(0);

    return (
        <div className={styles.menuSelection_wrapper}>
            <div className={styles.menu_wrapper}>
                {MENU_ITEMS.map(({ icon: Icon, label }, index) => (
                    <div key={index} className={styles.menu_item}>
                        <Icon />
                        <p>{label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuSelection;