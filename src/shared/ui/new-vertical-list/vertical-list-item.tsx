import {ReactNode} from "react";

type PropsType = {
    className?: string,
    children: ReactNode,
    title?:string
}

export function VerticalListItem({className, children,title}: PropsType) {
    return <li className={`vertical-list__item ${className ? className : ""}`} title={title}>
        {children}
    </li>
}