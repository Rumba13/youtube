import "./styles.scss";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {ArrowIcon} from "../../../../images/arrow-icon";
import {VerticalListItem} from "../../../../shared/ui/new-vertical-list/vertical-list-item";
import {MouseEventHandler} from "react";

type PropsType = {
    title: string,
    isExpanded: boolean
    onClick?: MouseEventHandler,

}

export function ExpandButton({title, isExpanded, onClick}: PropsType) {
    return <VerticalListItem className="aside-item" title={title}
                             onClick={onClick}>
        <SvgIcon className={`aside-item__icon ${isExpanded ? "collapse-icon" : "expand-icon"}`} Icon={ArrowIcon}/>
        <span className="aside-item__title">{title}</span>
    </VerticalListItem>
}