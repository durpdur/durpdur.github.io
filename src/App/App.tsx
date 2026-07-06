import { useEffect, useState } from 'react';

import Lockscreen from '../components/Lockscreen/Lockscreen';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import MenuSelection from '../components/MenuSelection/MenuSelection';

import "./App.css";

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import ContactsIcon from '@mui/icons-material/Contacts';

import type { MenuItem } from '../types/menu';

function App() {
    const MENU_ITEMS: MenuItem[] = [
        { icon: SchoolIcon, label: "Education" },
        { icon: WorkIcon, label: "Work Experience" },
        { icon: CodeIcon, label: "Projects" },
        { icon: ContactsIcon, label: "Contact" }
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
                (<Lockscreen
                    setAuthenticated={setAuthenticated}
                />) :
                (<div>
                    <MenuSelection
                        MENU_ITEMS={MENU_ITEMS}
                    />
                </div>)
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