import "./styles.scss";
import {ReactNode} from "react";

type PropsType = {
    className?: string,
    children: ReactNode,
}

export function NewVerticalList({className, children}: PropsType) {
    return <ul className={`new-vertical-list${className ? " " + className : ""}`}>
        {children}
    </ul>
}