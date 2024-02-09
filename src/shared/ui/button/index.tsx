import "./styles.scss";
import {MouseEventHandler, ReactNode} from "react";

type PropsType = {
    className?: string,
    children: ReactNode,
    onClick?: MouseEventHandler,
    withAnimation?: boolean
}

export function Button({className, children, onClick, withAnimation = true}: PropsType) {
    return <div className={`button${className ? " " + className : ""}${withAnimation ? " with-animation" : ""}`}
                onClick={onClick}>
        <div className="button__interaction"></div>
        {children}
    </div>
}