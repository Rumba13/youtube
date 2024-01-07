import React from 'react';
import {DesktopLayout} from "../layouts/desktop-layout";
import {Overlay} from "./overlay";
import {notificationsState} from "../widgets/notifications-modal";

export function App() {
    notificationsState.loadNotifications();

    return <div className="app">
        <Overlay/>
        <DesktopLayout/>
    </div>

}