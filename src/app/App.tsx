import {DesktopLayout} from "../layouts/desktop-layout";
import {Overlay} from "./overlay";
import {notificationsState} from "../widgets/notifications-modal";
import {} from "./i18n/index";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

export function App() {
    notificationsState.loadNotifications();

    const {i18n, t} = useTranslation();


    useEffect(() => {
    i18n.changeLanguage("en")
    }, []);

    return <div className="app">
        <Overlay/>
        <DesktopLayout/>
    </div>
}