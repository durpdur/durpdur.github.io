import { Routes, Route } from "react-router-dom";
import MenuSelection from "./components/MenuSelection/MenuSelection";
import type { MenuItem } from "./types/menu";
import Education from "./components/Education/Education";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

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
            <Route path="/education" element={<Education />} />
            <Route path="/work" element={<WorkExperience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoutes;