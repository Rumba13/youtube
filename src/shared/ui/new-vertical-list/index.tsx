import "./styles.scss";
import {MouseEventHandler, ReactNode} from "react";

type PropsType = {
    className?: string,
    children: ReactNode,
    onClick?:MouseEventHandler
}

export function NewVerticalList({className, children, onClick}: PropsType) {
    return <ul className={`new-vertical-list${className ? " " + className : ""}`} onClick={onClick}>
        {children}
    </ul>
}