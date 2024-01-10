import "./styles.scss";
import {ReactNode} from "react";
import {VerticalListItem} from "./vertical-list-item";

type PropsType = {
    className?: string,
    listItemClassName?: string,
    items: ReactNode[]
}

export function VerticalList({className, listItemClassName, items}: PropsType) {
    return <ul className={`vertical-list${className ? " " + className : ""}`}>
        {items.map(item => <VerticalListItem
            className={`vertical-list__item${listItemClassName ? " " + listItemClassName : ""}`} item={item}/>)}
    </ul>
}