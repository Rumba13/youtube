import {DesktopLayout} from "../layouts/desktop-layout";
import {Overlay} from "./overlay";
import {notificationsState} from "../widgets/notifications-modal";
import {} from "./i18n/index";

export function App() {
    notificationsState.loadNotifications();
    return <div className="app">
        <Overlay/>
        <DesktopLayout/>
    </div>
}