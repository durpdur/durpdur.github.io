import { useEffect, useState } from 'react';

import Lockscreen from './components/Lockscreen/Lockscreen';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import AppRoutes from './AppRoutes';

import "./App.css";

import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactsIcon from '@mui/icons-material/Contacts';

import portfolioData from "./assets/portfolio_data.json";

import type { MenuItem } from './types/menu_types';

function App() {
    const MENU_ITEMS: MenuItem[] = [
        { icon: InfoIcon, label: "About Xingran", path: "/info" },
        { icon: SchoolIcon, label: "Education", path: "/education" },
        { icon: WorkIcon, label: "Work Experience", path: "/work" },
        { icon: CodeIcon, label: "Projects", path: "/projects" },
        { icon: ContactsIcon, label: "Contact", path: "/contact" }
    ];

    const [isLoading, setIsLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 100)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <main className="loading-page">
                <LoadingScreen />
            </main>
        )
    }

    return (
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

    )
}

export default App
