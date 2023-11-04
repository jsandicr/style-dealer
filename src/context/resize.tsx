import { createContext, useMemo, useState } from "react"

type ResizeContextType = "sm" | "md" | "lg";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const ResizeContext = createContext<{
    screenSize: ResizeContextType | undefined;
    setScreenSize: React.Dispatch<React.SetStateAction<ResizeContextType | undefined>>;
  }>({ screenSize: undefined, setScreenSize: () => {} });

export const ResizeProvider = ({children}: Props) => {

    const [screenSize, setScreenSize] = useState<ResizeContextType | undefined>(undefined)

    const contextValue = useMemo(()=>{
        return {
            screenSize,
            setScreenSize
        }
    }, [screenSize, setScreenSize])

    return(
        <ResizeContext.Provider value={contextValue}>
            {children}
        </ResizeContext.Provider>
    )
}