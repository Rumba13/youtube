import "./styles.scss";
import {FC} from "react";

type PropsType = {
    className?: string
    Icon: FC,
}

export function SvgIcon({Icon, className}: PropsType) {
    return <div className={`svg-icon${className ? " " + className : ""}`}>
        <Icon/>
    </div>
}