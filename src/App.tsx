import { useEffect, useState } from 'react'
import Lockscreen from './Lockscreen'
import LoadingScreen from './LoadingScreen/LoadingScreen'

function App() {
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
                (<Lockscreen />) :
                (<div>
                    <p>Blah blah blah rest of app</p>
                </div>)
            }
            <button
                style={{ background: "blue", width: "200px", height: "200px" }}
                onClick={() => setAuthenticated(prev => !prev)}
            >
                {text}
            </button>
        </main>

    )
}

export default App