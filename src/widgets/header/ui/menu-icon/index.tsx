import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";

export function MenuIcon() {
    return <div className="menu-icon">
        <div className="menu-icon__interaction"></div>

        <svg className="menu-icon__icon" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
        </svg>
        <TextTip>Влад Позорник</TextTip>
    </div>
}