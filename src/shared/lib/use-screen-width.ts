import {useEffect, useState} from "react";

export function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth));

        return () => window.removeEventListener("resize", () => setScreenWidth(window.innerWidth));
    }, []);

    return screenWidth
}