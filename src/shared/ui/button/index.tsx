import "./styles.scss";
import {MouseEventHandler, ReactNode} from "react";

type PropsType = {
    className?: string,
    children: ReactNode,
    onClick?:MouseEventHandler
}

export function Button({className, children,onClick}: PropsType) {
    return <div className={`button${className ? " " + className : ""}`} onClick={onClick}>
        <div className="button__interaction"></div>
        {children}
    </div>
}