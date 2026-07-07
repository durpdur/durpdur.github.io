import { Routes, Route } from "react-router-dom";
import MenuSelection from "./components/MenuSelection/MenuSelection";
import Education from "./components/Education/Education";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import type { MenuItem } from "./types/menu_types";
import type { PortfolioData } from "./types/portfolio_data_types";

type AppRoutesProps = {
    menuItems: MenuItem[];
    portfolioData: PortfolioData;
};

function AppRoutes({ menuItems, portfolioData }: AppRoutesProps) {
    return (
        <Routes>
            <Route
                path="/"
                element={<MenuSelection MENU_ITEMS={menuItems} />}
            />
            <Route path="/education" element={<Education education={portfolioData.education} />} />
            <Route path="/work" element={<WorkExperience experiences={portfolioData.experiences} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoutes;