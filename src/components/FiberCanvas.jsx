import { useFrame, useLoader} from "@react-three/fiber"
import { MathUtils, TextureLoader } from "three"
import { useRef } from 'react'

import './FiberCanvas.css'

export const Moon = () => {
    useFrame(({mouse, camera}) => {
        camera.rotation.y = MathUtils.lerp(camera.rotation.y, mouse.x*0.5, 0.002)
    })
    const moonTexture = useLoader(TextureLoader, 'moon.jpg') 
    const moonRef = useRef()
    useFrame(({clock})=> {
        moonRef.current.rotation.y += 0.001
    })
    return (
        <mesh ref={moonRef} position={[4,2,0]}>
            <sphereGeometry/>
            <meshStandardMaterial map={moonTexture}/>
        </mesh>
    )
}

export const Earth = ()=> {
    const earthTexture = useLoader(TextureLoader, 'earth.jpg')
    const earthRef = useRef()
    useFrame(({clock})=> {
        earthRef.current.rotation.y += 0.0005
    })
    return (
        <mesh ref={earthRef} position={[3,-4,3]} scale={4}>
            <sphereGeometry/>
            <meshStandardMaterial map={earthTexture}/>
        </mesh>
    )
}
