import { useContext , useEffect} from "react"
import { ResizeContext } from "../context/resize"

export function useResize(){    
    const { screenSize, setScreenSize } = useContext(ResizeContext)

    useEffect(()=>{
        const handleSize = () => {
            const width = window.innerWidth;

            if (width <= 768) {
                setScreenSize('sm')
            } else if (width > 768 && width <= 1024) {
                setScreenSize('md')
            } else {
                setScreenSize('lg')
            }
        }
    
        window.addEventListener("resize", handleSize)
        handleSize()

        return () => {
            window.removeEventListener("resize", handleSize);
        }
    },[setScreenSize])

    return { screenSize }
}