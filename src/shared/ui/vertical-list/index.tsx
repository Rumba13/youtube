import "./styles.scss";
import {ReactNode} from "react";

type PropsType = {
    className?: string,
    listItemClassName?: string,
    items: ReactNode[]
}

export function VerticalList({className, listItemClassName, items}: PropsType) {
    return <ul className={`vertical-list ${className ? className : ""}`}>
        {items.map(item => <li className={`vertical-list__item ${listItemClassName ? listItemClassName : ""}`}>
            {item}
        </li>)}
    </ul>
}