import { useState } from 'react';
import { HashRouter } from 'react-router-dom';

import Lockscreen from './components/Lockscreen/Lockscreen';
import AppRoutes from './AppRoutes';

import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactsIcon from '@mui/icons-material/Contacts';

import portfolioData from "./assets/portfolio_data.json";

import type { MenuItem } from './types/menu_types';

function ScreenApp() {
    const MENU_ITEMS: MenuItem[] = [
        { icon: InfoIcon, label: "About Ian", path: "/info" },
        { icon: SchoolIcon, label: "Education", path: "/education" },
        { icon: WorkIcon, label: "Work Experience", path: "/work" },
        { icon: CodeIcon, label: "Projects", path: "/projects" },
        { icon: ContactsIcon, label: "Contact", path: "/contact" }
    ];
    const [authenticated, setAuthenticated] = useState(true);

    return (
        <HashRouter>
            <main className="app-page">
                {!authenticated ?
                    (
                        <Lockscreen setAuthenticated={setAuthenticated} />
                    ) :
                    (
                        <AppRoutes
                            menuItems={MENU_ITEMS}
                            portfolioData={portfolioData}
                        />
                    )
                }
            </main>
        </HashRouter>
    )
}

export default ScreenApp;
