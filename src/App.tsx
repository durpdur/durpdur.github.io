import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Monitor from './Monitor'

function App() {
    return (
        <Canvas>
            <Monitor />
            <OrbitControls />
        </Canvas>
    )
}
export default App;
