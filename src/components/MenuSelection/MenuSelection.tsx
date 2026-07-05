import "./MenuSelection.css";

type MenuSelectionProps = {
    MENU_ITEMS: Array<string>;
}

function MenuSelection({ MENU_ITEMS }: MenuSelectionProps) {
    return (
        <div id="menuSelection_wrapper">
            <div id="menu_wrapper">
                {MENU_ITEMS.map(item => (
                    <p>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default MenuSelection;