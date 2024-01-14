import {DesktopLayout} from "../layouts/desktop-layout";
import {Overlay} from "./overlay";
import {} from "./i18n/index";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export function App() {

    const {i18n, t} = useTranslation();


    useEffect(() => {
    i18n.changeLanguage("ru")
    }, []);

    return <div className="app">
        <Overlay/>
        <DesktopLayout/>
    </div>
}