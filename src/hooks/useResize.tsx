import { useContext , useEffect} from "react"

import { ResizeContext } from "../context/resize"

export function useResize(){    
    const { screenSize, setScreenSize } = useContext(ResizeContext)

    useEffect(()=>{
        const handleSize = () => {
            if(window.innerWidth <= 768) setScreenSize('sm')
            if(window.innerWidth > 768 && window.innerWidth <= 1024) setScreenSize('md')
            if(window.innerWidth > 1024) setScreenSize('lg')
        }
    
        window.addEventListener("resize", handleSize)
        handleSize()

        return () => {
            window.removeEventListener("resize", handleSize);
        }
    },[])

    return { screenSize }
}