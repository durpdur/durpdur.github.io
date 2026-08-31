import { Clone, Html, useGLTF } from '@react-three/drei'
import ScreenApp from './ScreenApp'
import { useRef } from 'react'
import * as THREE from "three";

type PositionProp = {
    position?: [number, number, number]
}

function Platform({ position = [0, 0, 0] }) {
    const { scene } = useGLTF('/Platform.glb')

    return (
        <primitive
            object={scene}
            position={position}
            scale={[1, 1, 1]}
        />
    )
}
function Path({ position = [0, 0, 0] }: PositionProp) {
    const { scene } = useGLTF('/Path.glb')

    return <Clone object={scene} position={position} />
}


function Monitor() {
    const platformHeight = -8;

    const lightTarget = useRef<THREE.Object3D>(null);

    return (
        <group>
            {/* React interface */}
            <Html
                transform
                center
                occlude="blending"
                scale={1.5}
                position={[0, 1, -10]}
                rotation={[Math.PI / 32, 0, 0]}
            >
                <ScreenApp />
            </Html>


            <spotLight
                position={[0, 0, -4]}
                target={lightTarget.current ?? undefined}
                color="#7fc8ff"
                intensity={100}
                distance={25}
                angle={Math.PI / 3}
                penumbra={0.8}
                decay={2}
            />

            <Platform position={[0, platformHeight, 0]} />
            <Path position={[0, platformHeight, 3]} />
            <Path position={[0, platformHeight, 6]} />
            <Path position={[0, platformHeight, 9]} />
            <Path position={[0, platformHeight, 12]} />
            <Path position={[0, platformHeight, 15]} />
        </group>
    )
}

export default Monitor;
