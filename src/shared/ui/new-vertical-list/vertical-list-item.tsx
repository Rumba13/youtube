import {MouseEventHandler, ReactNode} from "react";

type PropsType = {
    className?: string,
    children: ReactNode,
    title?: string,
    onClick?: MouseEventHandler
}

export function VerticalListItem({className, children, title, onClick}: PropsType) {
    return <li className={`vertical-list__item ${className ? className : ""}`} title={title} onClick={onClick}>
        {children}
    </li>
}