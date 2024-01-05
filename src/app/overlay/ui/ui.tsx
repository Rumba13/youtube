import "./styles.scss";
import {observer} from "mobx-react";
import {overlayState} from "../model/model";

export const Overlay = observer(() => {
    return <div className={`overlay ${overlayState.isOverlayOpened ? "opened" : ""}`}></div>
});