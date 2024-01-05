import "./styles.scss";
import {FC, ReactNode} from "react";

type PropsType = {
    className?: string
    Icon: FC,
}

export function SvgIcon({Icon, className}: PropsType) {
    return <div className={`svg-icon ${className ? className : ""}`}>
        {<Icon/>}
    </div>
}