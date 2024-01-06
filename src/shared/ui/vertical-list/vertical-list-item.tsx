import {ReactNode} from "react";

type PropsType = {
    className?: string,
    item: ReactNode
}

export function VerticalListItem({className, item}: PropsType) {
    return <li className={`vertical-list__item ${className ? className : ""}`}>
        {item}
    </li>
}