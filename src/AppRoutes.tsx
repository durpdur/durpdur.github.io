import { Routes, Route } from "react-router-dom";
import MenuSelection from "./components/MenuSelection/MenuSelection";
import type { MenuItem } from "./types/menu";

type AppRoutesProps = {
    menuItems: MenuItem[];
};

function AppRoutes({ menuItems }: AppRoutesProps) {
    return (
        <Routes>
            <Route
                path="/"
                element={<MenuSelection MENU_ITEMS={menuItems} />}
            />
            <Route path="/education" element={<div>Education</div>} />
            <Route path="/work" element={<div>Work Experience</div>} />
            <Route path="/projects" element={<div>Projects</div>} />
            <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
    );
}

export default AppRoutes;