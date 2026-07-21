// Monitor.tsx
import { Html } from '@react-three/drei'
import ScreenApp from './ScreenApp'

export default function Monitor() {
    return (
        <group>
            {/* Screen surface */}
            <mesh position={[0, 0, 0.055]}>
                <planeGeometry args={[3, 1.8]} />
                <meshBasicMaterial color="#fff" />
            </mesh>

            {/* React interface */}
            <Html
                transform
                center
                position={[0, 0, 0]}
                scale={0.1}
            >

                <ScreenApp />
                {/* <div
                    style={{
                        width: 1000,
                        height: 600,
                        overflow: 'hidden',
                        background: '#fff',
                    }}
                    onPointerDown={(event) => event.stopPropagation()}
                    onWheel={(event) => event.stopPropagation()}
                >
                    <ScreenApp />
                </div> */}
            </Html>
        </group>
    )
}
