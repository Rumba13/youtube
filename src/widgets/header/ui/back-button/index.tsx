import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";
import React from "react";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {ArrowLeftIcon} from "../../../../images/arrow-left-icon";

type PropsType = {
    onClick?: React.MouseEventHandler
}

export function BackButton({onClick}: PropsType) {
    return <div className="back-button" onClick={onClick}>
        <div className="back-button__interaction"></div>
        <SvgIcon className="back-button__icon" Icon={ArrowLeftIcon}/>
        <TextTip>Назад</TextTip>
    </div>
}