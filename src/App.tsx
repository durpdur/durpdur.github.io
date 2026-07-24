import { Canvas } from '@react-three/fiber'
import Monitor from './Monitor'


function App() {
    return (
        <Canvas style={{ backgroundColor: "black" }} camera={{ position: [0, -3, 30], fov: 50 }}>
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 5, 0]} />
            <Monitor />
        </Canvas>
    )
}
export default App;
