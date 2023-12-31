import React from 'react';
import {DesktopLayout} from "../layouts/desktop-layout";
import {Overlay} from "../xzchto/overlay/ui/ui";

export function App() {
    return (
        <div className="app">
            <Overlay/>
            <DesktopLayout/>
        </div>
    );
}