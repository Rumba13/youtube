import "./styles.scss";
import {SearchIcon} from "../../../../images/search-icon";
import {TextTip} from "../../../../shared/ui/text-tip";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import React from "react";

type PropsType = {
    disabled?: boolean,
    buttonType: "submit" | "reset" | "button" | undefined,
    type: "mini" | "normal",
    onClick?: React.MouseEventHandler
}

export function SearchButton({buttonType, type, disabled = false, onClick}: PropsType) {

    if (type === "normal") {
        return <button className="search-icon-button" disabled={disabled} onClick={onClick}
                       type={buttonType}>
            <SvgIcon className="search-icon" Icon={SearchIcon}/>
            <TextTip>Введите запрос</TextTip>
        </button>
    } else {
        return <button className="search-icon-button-mini" disabled={disabled} onClick={onClick}
                       type={buttonType}>
            <div className="search-icon-button-mini__interaction"></div>
            <SvgIcon className="search-icon" Icon={SearchIcon}/>
            <TextTip>Введите запрос</TextTip>
        </button>
    }


}