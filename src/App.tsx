import { useEffect, useState } from 'react';

import Lockscreen from './components/Lockscreen/Lockscreen';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import AppRoutes from './AppRoutes';

import "./App.css";

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactsIcon from '@mui/icons-material/Contacts';

import type { MenuItem } from './types/menu';

function App() {
    const MENU_ITEMS: MenuItem[] = [
        { icon: SchoolIcon, label: "Education", path: "/education" },
        { icon: WorkIcon, label: "Work Experience", path: "/work" },
        { icon: CodeIcon, label: "Projects", path: "/projects" },
        { icon: ContactsIcon, label: "Contact", path: "/contact" }
    ];

    const [isLoading, setIsLoading] = useState(true)
    const [authenticated, setAuthenticated] = useState(false)
    const [text, setText] = useState("Locked")

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (authenticated) {
            setText("Unlocked!")
        } else {
            setText("Locked")
        }
    }, [authenticated])

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
                    <AppRoutes menuItems={MENU_ITEMS} />
                )
            }
            <button
                className="bypass_button"
                onClick={() => setAuthenticated(prev => !prev)}
            >
                {text}
            </button>
        </main>

    )
}

export default App
